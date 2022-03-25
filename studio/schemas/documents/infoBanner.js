export default {
  title: "Informasjonsfane",
  name: "infoBanner",
  type: "document",
  fields: [
    {
      name: "note",
      type: "note",
      options: {
        headline: "Hva er dette?",
        message:
          "Her fyller du ut innholdet som vises i 'banneret' som vises helt øverst på alle sidene.Du kan også velge å skjule den hvis du ønsker det.",
        tone: "brand",
      },
    },
    {
      title: "Vise infobanner?",
      name: "isShown",
      type: "boolean",
      initialValue: true,
    },
    {
      title: "Tekst",
      name: "title",
      type: "string",
      description: "Skriv hva du ønsker å vise i fanen",
    },
    {
      title: "Linke til noe? (valgfritt)",
      name: "linkTo",
      type: "reference",
      description:
        "Hvis du ønsker at kundene skal bli tatt til en side når de trykker på banneret, så velg en side, produkt eller kolleksjon her. Du kan også bare la den stå tom.",
      options: {
        disableNew: true,
      },
      to: [
        { type: "product" },
        { type: "productVariant" },
        { type: "page" },
        { type: "collection" },
      ],
    },
  ],
};
