export default {
  title: "Kolleksjoner",
  name: "upsellCollection",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      description: "String description",
    },
    {
      title: "Produkter",
      name: "products",
      type: "array",
      description:
        "Velg hvilke produkter du ønsker å ha i denne mersalgskolleksjonen",
      of: [
        {
          title: "Velg et produkt ved å søke eller ved å bruke nedtrekkslisten",
          type: "reference",
          to: [{ type: "productVariant" }],
          options: {
            layout: "grid",
            disableNew: true,
          },
        },
      ],
    },
  ],
};
