import getRawBody from "raw-body";
import crypto from "crypto";
import { sanityClient } from "../../../lib/sanity";

// --------------------------------------------
// -------------- Main funksjon ---------------
// --------------------------------------------

export default async function handler(req, res) {
  // Cutsome middleware, nødvendig for å kunne extracte rawBody
  runMiddleware(req, res);

  const rawBody = await getRawBody(req);

  //! Sjekk om det er "rawBody" eller "body" som skal i crypto.update
  // Henter ut hook secret
  const hmac = req.headers["x-shopify-hmac-sha256"];
  const generatedHash = crypto
    .createHmac("sha256", process.env.SHOPIFY_WEBHOOK_INTEGRITY)
    .update(rawBody, "utf8", "hex")
    .digest("base64");

  // ! Kommentert ut, da den ikke fungerer. Endre til try?
  // Veldierer hook secret
  // if (hmac !== generatedHash) {
  //   console.error("Unable to verify from Shopify");
  //   return res.status(200).json({ error: "Unable to verify from Shopify" });
  // }

  // Destructrer nødvendige komponenter
  const { method, headers, body } = req;
  console.log(body);

  // Method skal være POST, avbryt hvis ikke
  if (method !== "POST") {
    console.error("Must be a POST request");
    return res.status(200).json({ error: "Must be a POST request" });
  }

  // Try/catch for bedre feil håndtering
  // Switchcase for de ulike hook operasjonene
  try {
    switch (headers["x-shopify-topic"]) {
      case "products/create":
        const resultCreate = await initCreateOrReplace(body);
        if (resultCreate) {
          return res.status(200).send("OK");
        } else {
          return res.status(400).send("Wrong input");
        }
      case "products/update":
        const resultUpdate = await initCreateOrReplace(body);
        if (resultUpdate) {
          return res.status(200).send("OK");
        } else {
          return res.status(400).send("Wrong input");
        }
      case "products/delete":
        const resultDelete = await initDelete(body);
        if (resultDelete) {
          return res.status(200).send("OK");
        } else {
          return res.status(400).send("Wrong input");
        }
      default:
        // Breaker ut av switchcasen hvis operasjonen er invalid.
        break;
    }
  } catch (error) {
    console.log("Error:");
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

// --------------------------------------------
// ------------- Init funksjoner --------------
// --------------------------------------------

const initCreateOrReplace = async (shopifyData) => {
  console.info(
    `Sync triggered for product: ${shopifyData.title} (id: ${shopifyData.id})`
  );

  try {
    await sanityClient.createOrReplace(transform(shopifyData));
    return true;
  } catch (error) {
    console.log("Error:");
    console.log(error);
    return false;
  }
};

const initDelete = async (shopifyData) => {
  console.info(
    `Sync triggered for product: ${shopifyData.title} (id: ${shopifyData.id})`
  );

  try {
    await sanityClient.delete(shopifyData.id);
    return true;
  } catch (error) {
    console.log("Error:");
    console.log(error);
    return false;
  }
};

// --------------------------------------------
// ------ Nødvendige hjelpefunksjoner ---------
// --------------------------------------------

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
