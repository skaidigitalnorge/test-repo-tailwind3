export default {
  title: "Bunnseksjon",
  name: "footer",
  type: "document",
  fields: [
    {
      title: "Navigasjonsvalg",
      name: "navbar",
      type: "array",
      description: "",
      of: [
        {
          title: "Lenke",
          name: "linkExternal",
          type: "linkExternal",
          description:
            "Hvis du skal ta noen direkte til en side, så velg denne",
        },
        {
          title: "Nedtrekksliste",
          name: "dropdown",
          type: "linkList",
          description: "Hvis du skal ha en nedtrekksliste, så velg denne",
        },
      ],
    },
  ],
};
