import { getSwatch } from "../../../lib/helpers";

export default {
  title: "Farger",
  name: "solidColor",
  type: "document",
  fields: [
    {
      title: "Navn på farge",
      name: "title",
      type: "string",
      description: "Brukes bare internt for å holde styr på fargene",
      validatin: (Rule) => Rule.required(),
    },
    {
      title: "Farge",
      name: "color",
      type: "color",
      options: {
        disableAlpha: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      color: "color",
    },
    prepare({ title, color }) {
      return {
        title: title,
        subtitle: color?.hex ? color.hex.toUpperCase() : "",
        media: color?.hex ? getSwatch(color.hex.toUpperCase()) : null,
      };
    },
  },
};
