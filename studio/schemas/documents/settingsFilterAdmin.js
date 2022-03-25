export default {
  title: "Filter (admin)",
  name: "settingsFilterAdmin",
  type: "document",
  groups: [
    { name: "sort", title: "Sortering", default: true },
    { name: "filter", title: "Filtrering" },
    { name: "pagination", title: "Sideoppsett" },
  ],
  fields: [
    {
      title: "Title",
      name: "note",
      type: "note",
      options: {
        headline: "App app app!",
        message:
          "Denne siden bør bare røres dersom du er en av utviklerne. Ser du denne siden selv om du ikke er ta. Ta kontakt med Skai-gutta!",
        tone: "brand",
      },
      group: "sort",
    },

    {
      title: "Filter",
      name: "filter",
      type: "filterSettings",
      group: "filter",
    },
    {
      title: "Sortering",
      name: "sort",
      type: "sortSettings",
      group: "sort",
    },
    {
      title: "Pagination Limit",
      name: "paginationLimit",
      type: "number",
      description: "Antall produkter som lastes inn i en collection av gangen",
      validation: (Rule) => Rule.integer().positive().min(3).max(100),
      initialValue: 12,
      group: "pagination",
    },
  ],
};
