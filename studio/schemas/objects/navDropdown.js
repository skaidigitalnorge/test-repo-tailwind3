export default {
  title: "Page",
  name: "navDropdown",
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
      name: "Nedtrekksliste",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "collection" }, { type: "product" }],
        },
      ],
    },
  ],
};
