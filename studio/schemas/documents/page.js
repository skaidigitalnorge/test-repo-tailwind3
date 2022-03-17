import { MdWeb } from "react-icons/md";

export default {
  title: "Page",
  name: "page",
  type: "document",
  icon: MdWeb,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    { name: "modules", title: "Moduler", default: true },
  ],
  fields: [
    {
      title: "Sidetittel",
      name: "title",
      type: "string",
      description: "Denne brukes bare internt. Den vises ikke på nettsiden",
    },
    {
      title: "Adresse til side",
      name: "slug",
      type: "slug",
      description: "Vises typisk i Google-søk og øverst i nettleservinduet",
      options: {
        source: "title",
        maxLength: 96,
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
      group: "modules",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `/${subtitle}`,
      };
    },
  },
};
