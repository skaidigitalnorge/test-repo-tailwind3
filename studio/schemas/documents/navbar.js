export default {
  title: "Toppnavigasjon",
  name: "navbar",
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
          name: "link",
          type: "link",
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
