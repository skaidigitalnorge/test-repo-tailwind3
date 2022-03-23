import getRawBody from "raw-body";
import crypto from "crypto";
import { sanityClient } from "../../../lib/sanity";

export default async function handler(req, res) {
  console.log("Hei fra sync");
  // console.log("reg:");
  // console.log(req);
  // console.log("query:");
  // console.log(req.query);
  // console.log("body:");
  // console.log(req.body);
  // const body2 = JSON.parse(req.body);
  // console.log(body2);
  // console.log("res:");
  // console.log(res);
  // console.log("req.body");
  // console.log(req.body);
  runMiddleware(req, res);

  const rawBody = await getRawBody(req);

  // get request integrity header
  const hmac = req.headers["x-shopify-hmac-sha256"];
  const generatedHash = crypto
    .createHmac("sha256", process.env.SHOPIFY_WEBHOOK_INTEGRITY)
    .update(rawBody, "utf8", "hex")
    .digest("base64");

  // bail if shopify integrity doesn't match
  // if (hmac !== generatedHash) {
  //   console.error("Unable to verify from Shopify");
  //   return res.status(200).json({ error: "Unable to verify from Shopify" });
  // }

  // extract shopify data
  const { body } = req;
  console.log(body);

  const { method, headers } = req;
  // const body = await getRawBody(req);
  // console.log(body);
  // const hmacHeader = req.headers["x-shopify-hmac-sha256"];
  // const digest = crypto
  //   .createHmac(
  //     "sha256",
  //     "03d34c047d2951692544779707f6ebe2b4e5dd223087f22aa0ce36c9f5808bec"
  //   )
  //   .update(body)
  //   .digest("base64");

  // Webhook har alltid post request, så alt annet er feil.
  if (method === "POST") {
    console.log("I post metoden");
    // if (digest === hmacHeader) {

    // Try catch, for bedre kontroll over feilmeldinger
    try {
      console.log("Inne i try");
      // ! Hvis slicingen under blir et problem, må vi endre til groq query i stedet, og opperere
      // ! og opperere med full shopify ID.

      // Først sjekke om produktet finnes, hvis ja:
      // 1. Endre eksisterende produkt, eller
      // 2. Slette eksisterende produkt
      const [existingProduct] = await sanityClient.getDocument(
        body.id.slice(0, -1).toLowerCase()
      );

      const test = sanityClient.transaction();

      const existing = existingProduct ? existingProduct : false;

      // console.log("Her er existingProduct:");
      // console.log(existingProduct);
      // console.log("Slutt:");

      if (existingProduct) {
        console.log("Produktet finnes");
        // x-shopify-topic er webhook headeren som har en verdi avhenig av operasjon
        switch (headers["x-shopify-topic"]) {
          case "products/update":
            await sanityClient.createOrReplace(transform(body));
            return res.status(200).send("OK");
          case "products/delete":
            await sanityClient.delete(body.id.slice(0, -1).toLowerCase());
            return res.status(200).send("OK");
          default:
            // Breaker ut av switchcasen hvis operasjonen er invalid.
            break;
        }
      } else {
        console.log("Produktet finnes ikke");
        switch (headers["x-shopify-topic"]) {
          case "products/create":
            console.log("Forsøker å create");
            await sanityClient.create(transform(body));
            return res.status(200).send("OK");
          default:
            // Breaker ut av switchcasen hvis operasjonen er invalid
            break;
        }
      }
    } catch (error) {
      console.log("Error:");
      console.log(error);
      return res.status(500).send("Internal server error");
    }
    // // } else {
    //   // INVALID - Respond with 401 Unauthorized
    //   res.status(401).end();
    // }
  }
  // Invalid requests
  return res.status(405).send("Method Not Allowed");
}

// Transformerer shopifydataen til data sanity kan lese. Denne kan utvides i takt med ønsket fields
function transform(product) {
  const singleProduct = {
    _id: product.id.slice(0, -1).toLowerCase(),
    _type: "product",
    productTitle: product.title,
    productId: product.id,
  };

  return singleProduct;
}

// Custom Middleware to parse Shopify's webhook payload
const runMiddleware = (req, res, fn) => {
  new Promise((resolve) => {
    if (!req.body) {
      let buffer = "";
      req.on("data", (chunk) => {
        buffer += chunk;
      });

      req.on("end", () => {
        resolve();
        req.body = JSON.parse(Buffer.from(buffer).toString());
      });
    }
  });
};

// We turn off the default bodyParser provided by Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};
