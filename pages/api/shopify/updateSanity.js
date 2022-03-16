import { getAllProducts } from "../../../lib/shopify";
import { sanityClient } from "../../../lib/sanity";

export default async function handler(req, res) {
  const products = await getAllProducts();

  // Mapper alle parent-produkter
  const mappedProducts = products.map(transform);

  // Lager eller oppdaterer parent-produkter
  mappedProducts.map((product) => {
    sanityClient.createOrReplace(product);
  });

  const mappedVariantArray = [];

  const variants = products.map((product) => {
    const parentId = product.node.id.slice(0, -1).toLowerCase();
    console.log(parentId);
    product.node.variants.edges.map((variant) => {
      mappedVariantArray.push(transformVariants(variant, parentId));
    });
  });

  // Lager eller oppdaterer produktvarianter
  mappedVariantArray.map((productVariant) => {
    sanityClient.createOrReplace(productVariant);
  });
  console.log(res.status);
}

function transform(product) {
  const singleProduct = {
    _id: product.node.id.slice(0, -1).toLowerCase(),
    _type: "product",
    productTitle: product.node.title,
    productAvailability: product.node.availableForSale == true ? "Ja" : "Nei",
  };
  return singleProduct;
}

function transformVariants(variant, parentId) {
  const productVariant = {
    _id: variant.node.id.slice(0, -2).toLowerCase(),
    _type: "productVariant",
    productTitle: variant.node.title,
    productVariantPrice: variant.node.priceV2.amount,
    parentProduct: {
      _type: "reference",
      _ref: parentId,
    },
  };
  return productVariant;
}
