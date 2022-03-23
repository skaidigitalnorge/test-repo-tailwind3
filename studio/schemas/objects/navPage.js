export default {
  title: "Page",
  name: "navPage",
  type: "object",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      description: "Display text",
    },
    {
      title: "Side",
      name: "page",
      type: "reference",
      to: [
        { type: "page" },
        { type: "collection" },
        { type: "product" },
        { type: "productVariant" },
      ],
    },
  ],
};
