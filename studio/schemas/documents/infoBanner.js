export default {
  title: "Informasjonsfane",
  name: "infoBanner",
  type: "document",
  fields: [
    {
      title: "Vise infobanner?",
      name: "isShown",
      type: "boolean",
      initialValue: true,
    },

    {
      title: "Innhold",
      name: "simpleText",
      type: "simpleText",
      description:
        "Her skriver du hva du ønsker å vise i banneret helt øverst på siden",
    },
  ],
};
