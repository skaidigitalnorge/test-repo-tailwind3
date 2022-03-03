export default {
  title: "Page",
  name: "page",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      title: "Sidetittel",
      name: "title",
      type: "string",
      description: "Denne brukes bare internt. Den vises ikke på nettsiden",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "Dette er det som vises i søkefeltet etter blissflowerbox.com/",
    },

    {
      name: "metaInfo",
      type: "metaInfo",
      description: "Description",
      group: "seo",
    },

    {
      title: "Moduler",
      name: "faq",
      type: "array",
      of: [{ type: "faq" }, { type: "sectionTitle" }],
    },
  ],
  preview: {
    select: {
      title: `title`,
      // subtitle: "slug",
    },
  },
};
