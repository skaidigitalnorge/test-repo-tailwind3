export const SchemaSingleProductCard = (
  productImgSrc,
  productName,
  productPrice,
  productSalesPrice,
  productColor,
  productUrl
) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${productName != null ? productName : null}`,
    description: `This is a description`,
    color: `${productColor != null ? productColor : null}`,
    image: `${productImgSrc != null ? productImgSrc : null}`,
    brand: {
      type: "Organization",
      name: "Okstind",
    },
    offers: {
      type: "Offer",
      price: `${
        productSalesPrice != null
          ? productSalesPrice
          : productPrice != null
          ? productPrice
          : null
      }`,
      url: `https://okstind.com${productUrl != null ? productUrl : null}`,
      priceCurrency: "NOK",
      itemCondition: "http://schema.org/NewCondition",
      availability: "http://schema.org/InStock",
      seller: {
        type: "Organization",
        name: "Okstind",
      },
    },
  };
  JSON.stringify(schemaData);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
