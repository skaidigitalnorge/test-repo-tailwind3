import { RiArrowLeftRightLine } from "react-icons/ri";

export default {
  name: "redirect",
  title: "Redirect",
  type: "document",
  icon: RiArrowLeftRightLine,
  fields: [
    {
      name: "source",
      title: "Fra",
      type: "string",
      description: "Her velger du hvilken URL du ønsker å endre fra",
      validation: (Rule) => Rule.required().error("Du må velge fra-verdien"),
    },
    {
      name: "destination",
      title: "Til",
      type: "string",
      description: "Her velger du hvilken URL du ønsker å endre til",
      validation: (Rule) => Rule.required().error("Du må velge til-verdien"),
    },
    {
      name: "permanent",
      title: "Permanent",
      type: "boolean",
      initialValue: () => true,
    },
  ],
  preview: {
    select: {
      title: "source",
      subtitle: "destination",
      permanent: "permanent",
    },
    prepare({ title, subtitle, permanent }) {
      return {
        title: `/${title} -> /${subtitle}`,
        subtitle: `Permanent: ${permanent}`,
        media: RiArrowLeftRightLine,
      };
    },
  },
};
