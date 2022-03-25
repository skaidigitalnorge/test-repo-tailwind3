export default {
  title: "Cookie-innstillinger",
  name: "settingsCookies",
  type: "document",
  fields: [
    {
      name: "cookiePolicyNote",
      type: "note",
      options: {
        headline: "Hva er dette?",
        message:
          'Dette er "cookie-samtykket" som vises når en person drar innom siden for første gang. Vi bruker "implisitt samtykke", hvor brukeren samtykker at vi samler inn data, ved å bruke siden.',
        tone: "brand",
      },
    },
    {
      title: "Melding",
      name: "message",
      type: "text",
      rows: 2,
      description: "Hva som vises når cookie-samtykke vises",
      validation: (Rule) =>
        Rule.required().error("Du må ha en tekst her for å publisere"),
    },
    {
      title: "Link",
      name: "link",
      type: "reference",
      to: [{ type: "page" }],
      description:
        'Lenker til personvernerklæringen når brukeren trykker på "les mer".',
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Cookie-innstillinger",
      };
    },
  },
};
