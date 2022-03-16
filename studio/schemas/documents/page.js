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
      description: "Påkrevd",

      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
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
      subtitle: "slug",
    },
  },
  prepare({ title = "Untitled", slug = {} }) {
    const path = `/${slug.current}`;
    return {
      title,
      subtitle: slug.current ? path : "(ikke satt slug)",
    };
  },
};
