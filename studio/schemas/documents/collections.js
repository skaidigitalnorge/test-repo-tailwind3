export default {
  title: "Kolleksjoner",
  name: "collections",
  type: "document",
  fields: [
    {
      title: "Kolleksjon",
      name: "collectionTitle",
      type: "string",
      description: "Skriv navnet på kolleksjonen her",
    },
    {
      title: "Produkter",
      name: "collectionProducts",
      type: "array",
      description:
        "Legg inn produktene du ønsker å ha med i denne kolleksjonen her",
      of: [
        {
          type: "reference",
          options: {
            disableNew: true,
          },
          to: [{ type: "product" }, { type: "productVariant" }],
        },
      ],
    },
  ],
};
