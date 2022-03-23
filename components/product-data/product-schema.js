import { useRouter } from "next/router";

export const ProductSchema = (product, activeVariantID, site) => {
  if (!product) return null;

  const router = useRouter();
  const { query } = router;

  const variant = product.variants.find((v) => v.id == activeVariantID);

  return {
    "@context": "http://schema.org",
    "@type": "Product",
    name: product.title,
    price: centsToPrice(query.variant ? variant.price : product.price),
    sku: query.variant ? variant.sku : product.sku,
    offers: {
      "@type": "Offer",
      url: `${site.rootDomain}/products/${product.slug}${
        query.variant ? `?variant=${variant.id}` : ""
      }`,
      availability: query.variant
        ? `http://schema.org/${variant.inStock ? "InStock" : "SoldOut"}`
        : `http://schema.org/${product.inStock ? "InStock" : "SoldOut"}`,
      price: centsToPrice(query.variant ? variant.price : product.price),
      priceCurrency: "USD",
    },
    brand: {
      "@type": "Brand",
      name: site.title,
    },
  };
};
