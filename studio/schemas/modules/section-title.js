const categoryName = "Seksjonstittel";

export default {
  title: "Seksjonstittel",
  name: "sectionTitle",
  type: "object",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      description: "Skriv seksjonstittelen her",
    },
  ],
  preview: {
    select: {
      title: `title`,
      subtitle: "title",
    },
  },
  // prepare(selection) {
  //   const { title, subtitle } = selection;
  //   return {
  //     title: title,
  //     subtitle: `Directed by: ${title}`,
  //   };
  // },
};
