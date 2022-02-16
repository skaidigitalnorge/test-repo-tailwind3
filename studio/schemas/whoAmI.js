export default {
  title: "Hvem er jeg",
  name: "whoAmI",
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
    {
      title: "Innhold",
      name: "content",
      type: "richText",
      description: 'Her skriver du innholdet til "Hvem er jeg"-siden',
    },
  ],
};
