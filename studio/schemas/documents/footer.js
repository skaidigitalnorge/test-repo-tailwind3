export default {
  title: "Bunnseksjon",
  name: "footer",
  type: "document",
  groups: [
    { title: "1. kolonne", name: "col1", default: true },
    { title: "2. kolonne", name: "col2" },
    { title: "3. kolonne", name: "col3" },
    { title: "4. kolonne", name: "col4" },
  ],
  fields: [
    // 1st column content
    //
    {
      title: "Tittel 1. kolonne",
      name: "titleCol1",
      type: "string",
      description:
        "Dette er overskriften til førstekolonnen i bunnteksten på alle sider",
      group: "col1",
    },
    {
      title: "Innhold 1. kolonne",
      name: "contentCol1",
      type: "array",
      description: "Velg hvilke lenker du ønsker å vise i førstekolonnen her",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "collection" }],
          options: {
            disableNew: true,
          },
        },
      ],
      group: "col1",
    },

    // 2nd column content
    //
    {
      title: "Tittel 2. kolonne",
      name: "titleCol2",
      type: "string",
      description:
        "Dette er overskriften til førstekolonnen i bunnteksten på alle sider",
      group: "col2",
    },
    {
      title: "Innhold 2. kolonne",
      name: "contentCol2",
      type: "array",
      description: "Velg hvilke lenker du ønsker å vise i førstekolonnen her",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "collection" }],
          options: {
            disableNew: true,
          },
        },
      ],
      group: "col2",
    },

    // 3rd column content
    //
    {
      title: "Tittel 3. kolonne",
      name: "titleCol3",
      type: "string",
      description:
        "Dette er overskriften til førstekolonnen i bunnteksten på alle sider",
      group: "col3",
    },
    {
      title: "Innhold 3. kolonne",
      name: "contentCol3",
      type: "array",
      description: "Velg hvilke lenker du ønsker å vise i førstekolonnen her",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "collection" }],
          options: {
            disableNew: true,
          },
        },
      ],
      group: "col3",
    },

    // 4th column content
    //
    {
      title: "Tittel 4. kolonne",
      name: "titleCol4",
      type: "string",
      description:
        "Dette er overskriften til førstekolonnen i bunnteksten på alle sider",
      group: "col4",
    },
    {
      title: "Innhold 4. kolonne",
      name: "contentCol4",
      type: "array",
      description: "Velg hvilke lenker du ønsker å vise i førstekolonnen her",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "collection" }],
          options: {
            disableNew: true,
          },
        },
      ],
      group: "col4",
    },
  ],
};
