export default {
  title: "Bilde",
  name: "richImage",
  type: "object",
  fields: [
    {
      title: "Bilde",
      name: "image",
      type: "image",
    },
    {
      title: "Alternativtekst",
      name: "altText",
      type: "string",
      description:
        "Dette er tekst som vises til bruker som er blinde og bruker skjermlesere for å være på nett. Skriv en kort beskrivelse av hva du ser på bildet",
    },
  ],
};
