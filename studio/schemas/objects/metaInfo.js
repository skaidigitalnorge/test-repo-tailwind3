export default {
  title: "SEO-godsaker",
  name: "metaInfo",
  type: "object",
  fields: [
    {
      title: "Skal siden vises på Google?",
      name: "isIndexed",
      type: "boolean",
      initialValue: true,
    },

    {
      title: "Metatittel",
      name: "metaTitle",
      type: "string",
      description:
        "Dette er blant annet vises helt øverst i fanen i nettleseren. Hvis du ikke setter en spesifikk tittel til en side du lager, så er det den du putter her som kommer til å vises",
    },
    {
      title: "Metabeskrivelse",
      name: "metaDescription",
      type: "string",
      description:
        "Ganske likt som den over, men det her vises f.eks. hvis du søker etter nettsiden på Google. Det er brødteksten som vises under tittelen - igjen, hvis du ikke skriver noe spesifikt til en annen side du lager",
    },
    {
      title: "Bilde",
      name: "metaImage",
      type: "richImage",
      description:
        "Hvis noen deler en side på f.eks. Facebook, og du ikke har et satt bilde for den siden, så er det dette bildet som vises",
    },
  ],
};
