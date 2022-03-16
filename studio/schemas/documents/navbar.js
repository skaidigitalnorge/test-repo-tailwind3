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
          title: "Eksternlenke",
          name: "linkExternal",
          type: "linkExternal",
          description:
            "Hvis du skal ta noen direkte til en side, så velg denne",
        },
        {
          title: "Internlenke",
          name: "linkInternal",
          type: "linkInternal",
          description: "Bruk denne hvis du skal linke til en egen side",
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
