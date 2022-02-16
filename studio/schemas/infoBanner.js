export default {
  title: "Informasjonsfane",
  name: "infoBanner",
  type: "document",
  fields: [
    {
      title: "Innhold",
      name: "content",
      type: "richText",
      description:
        'Her skriver du ønsker å vise øverst på alle sidene i et "banner"',
    },
    {
      title: "Vise banner?",
      name: "showBanner",
      type: "boolean",
      description: "Her bestemmer du om banneret skal vises eller ikke",
    },
  ],
};
