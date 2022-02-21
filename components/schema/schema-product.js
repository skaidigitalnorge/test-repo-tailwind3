import parse from "html-react-parser";
export const SchemaProduct = ({ activVariant }) => {
  let hasActiveVariant = true;
  let schemaData;
  if (activVariant != null) {
    const inStockCheck = () => {
      return activVariant.stockQuantity != null
        ? `availability: "http://schema.org/InStock"`
        : null;
    };

    schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${activVariant.name != null ? activVariant.name : null}`,
      description: `${
        activVariant.description != null
          ? parse(activVariant.description)
          : null
      }`,
      color: `${activVariant.color != null ? activVariant.color : null}`,
      image: `${
        activVariant.image != null ? activVariant.image.sourceUrl : null
      }`,
      brand: {
        type: "Organization",
        name: "Okstind",
      },
      offers: {
        type: "Offer",
        price: `${
          activVariant.salePrice != null
            ? activVariant.salePrice
            : activVariant.price
        }`,
        url: `https://okstind.com/produkt/${
          activVariant.slug != null ? activVariant.slug : null
        }`,

        priceCurrency: "NOK",
        itemCondition: "http://schema.org/NewCondition",
        availability: inStockCheck(),
        seller: {
          type: "Organization",
          name: "Okstind",
        },
      },
    };
    hasActiveVariant = false;
  }
  return hasActiveVariant ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  ) : null;
};
