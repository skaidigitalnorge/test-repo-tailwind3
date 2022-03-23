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
      title: "Tekst",
      name: "title",
      type: "string",
      description: "Skriv hva du ønsker å vise i fanen her",
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
