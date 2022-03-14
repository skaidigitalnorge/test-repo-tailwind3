import { getAllProducts } from "../../../lib/shopify";
import { sanityClient } from "../../../lib/sanity";

export default async function handler(req, res) {
  const products = await getAllProducts();
  const mappedProducts = products.map(transform);
  console.log(mappedProducts);
  mappedProducts.map((product) => {
    sanityClient.createOrReplace(product);
  });
  console.log(res.status);
}

function transform(product) {
  const singleProduct = {
    _id: product.node.id.slice(0, -1).toLowerCase(),
    _type: "product",
    productTitle: product.node.title,
  };

  return singleProduct;
}
