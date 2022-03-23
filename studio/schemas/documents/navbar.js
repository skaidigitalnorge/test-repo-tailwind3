export default {
  title: "Toppnavigasjon",
  name: "navbar",
  type: "document",
  groups: [
    { title: "Datamaskin", name: "desktop", default: true },
    { title: "Mobil", name: "mobile" },
  ],
  fields: [
    {
      title: "Innhold",
      name: "content",
      type: "array",
      description:
        "Her velger du hvilke sider du ønsker å linke til eller ha en nedtrekksliste til",
      of: [{ type: "navPage" }, { type: "navDropdown" }],
      group: "desktop",
    },
  ],
};
