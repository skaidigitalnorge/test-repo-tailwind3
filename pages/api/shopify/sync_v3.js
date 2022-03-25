import getRawBody from "raw-body";
import crypto from "crypto";
import sanityClient from "@sanity/client";

// import { sanityClient } from "../../../lib/sanity";

const sanity = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token:
    "skvAc1RNcYnP5j2e6aX2CtJJ9VKU6IUUxfiZy9hoxDuY3gntfwX5UqmLWOBnucUDRslNLCsvc6hd1FEDJ3pG4aiHoRiV1RwE4r3vFXHuMpmDABTOEOYpYbySSAtQq3S7xlJ53JOaxEmEIk5nTjTZGNs5xjrD0SILEdQ6FP6xmWCD3vkDCn6W",
  apiVersion: "2021-03-25",
  useCdn: false,
});

// --------------------------------------------
// -------------- Main funksjon ---------------
// --------------------------------------------

export default async function handler(req, res) {
  // Destructrer nødvendige komponenter
  const { method, body } = req;
  console.log("Body:");
  console.log(body);

  // Method skal være POST, avbryt hvis ikke
  if (method !== "POST") {
    console.error("Must be a POST request");
    return res.status(200).json({ error: "Must be a POST request" });
  }

  // Try/catch for bedre feil håndtering
  // Switchcase for de ulike hook operasjonene
  try {
    switch (body.action) {
      case "create":
        const resultCreate = await initCreateOrReplace(body.products);
        if (resultCreate) {
          return res.status(200).send("OK");
        } else {
          return res.status(400).send("Wrong input");
        }
      case "update":
        const resultUpdate = await initCreateOrReplace(body.products);
        if (resultUpdate) {
          return res.status(200).send("OK");
        } else {
          return res.status(400).send("Wrong input");
        }
      case "delete":
        const resultDelete = await initDelete(body.products);
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
    await sanity.createOrReplace(transform(shopifyData));
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
    await sanity.delete(shopifyData.id);
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
    _id: `product-${product.id}`,
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
