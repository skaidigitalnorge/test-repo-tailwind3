export default {
  title: "Innhold",
  name: "richText",
  type: "array",
  of: [
    {
      lists: [
        {
          title: "Punktliste",
          value: "bullet",
        },
        {
          title: "Nummerert liste",
          value: "number",
        },
      ],
      styles: [
        {
          title: "Overskrift",
          value: "h2",
        },
        { title: "Underoverskrift", value: "h3" },
      ],
      type: "block",
      marks: {
        decorators: [
          {
            title: "Skrå tekst",
            value: "em",
          },
          {
            title: "Tykk tekst",
            value: "strong",
          },
        ],
        // annotations: [
        //   {
        //     title: "Lenke til en ekstern side",
        //     name: "linkExternal",
        //     type: "linkExternal",
        //   },
        // ],
      },
    },
    {
      name: "image",
      title: "Bilde",
      type: "richImage",
    },
  ],
};
