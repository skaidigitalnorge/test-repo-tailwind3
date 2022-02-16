export default {
  title: "Behandlingstilbud",
  name: "behandlingstilbud",
  type: "document",
  fields: [
    {
      title: "Overskrift",
      name: "title",
      type: "string",
      description: "",
    },
    {
      title: "Underoverskrift",
      name: "subtitle",
      type: "string",
      description: "",
    },
    {
      title: "Bakgrunnsbilde",
      name: "image",
      type: "image",
      description: "Velg hvilket bakgrunnsbilde du ønsker på denne siden",
    },
    // Legg inn tekt som skriver at kommer til å stå tittel der
    {
      title: "Tjenester",
      name: "treatments",
      type: "richText",
      description: 'Her skriver du innholdet til "Hvem er jeg"-siden',
    },
    // Legg inn tekst som skriver at kommer til å stå priser der
    {
      title: "Priser",
      name: "priser",
      type: "richText",
      description: 'Her skriver du innholdet til "Hvem er jeg"-siden',
    },
  ],
};
