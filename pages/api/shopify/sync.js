import { sanityClient } from "../../../lib/sanity";

export default async function handler(req, res) {
  console.log("Hei fra sync");
  const { method, headers, body } = req;
  // Webhook har alltid post request, så alt annet er feil.
  if (method === "POST") {
    // Try catch, for bedre kontroll over feilmeldinger
    try {
      // ! Hvis slicingen under blir et problem, må vi endre til groq query i stedet, og opperere
      // ! og opperere med full shopify ID.

      // Først sjekke om produktet finnes, hvis ja:
      // 1. Endre eksisterende produkt, eller
      // 2. Slette eksisterende produkt
      const [existingProduct] = await sanityClient.getDocument(
        body.id.slice(0, -1).toLowerCase()
      );
      if (existingProduct) {
        // x-shopify-topic er webhook headeren som har en verdi avhenig av operasjon
        switch (headers["x-shopify-topic"]) {
          case "products/update":
            await sanityClient.createOrReplace(transform(existingProduct));
            return res.status(200).send("OK");
          case "products/delete":
            await sanityClient.delete(body.id.slice(0, -1).toLowerCase());
            return res.status(200).send("OK");
          default:
            // Breaker ut av switchcasen hvis operasjonen er invalid.
            break;
        }
      } else {
        switch (headers["x-shopify-topic"]) {
          case "products/create":
            await sanityClient.create(transform(existingProduct));
            return res.status(200).send("OK");
          default:
            // Breaker ut av switchcasen hvis operasjonen er invalid
            break;
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal server error");
    }
  }
  // Invalid requests
  return res.status(400).send("Bad request");
}

// Transformerer shopifydataen til data sanity kan lese. Denne kan utvides i takt med ønsket fields
function transform(product) {
  const singleProduct = {
    _id: product.node.id.slice(0, -1).toLowerCase(),
    _type: "product",
    productTitle: product.node.title,
    productId: product.node.id,
  };

  return singleProduct;
}
