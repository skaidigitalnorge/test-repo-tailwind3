import { BsArrow90DegDown } from "react-icons/bs";

export default {
  title: "Page",
  name: "navDropdown",
  type: "object",
  icon: BsArrow90DegDown,
  fields: [
    {
      title: "Overskrift",
      name: "title",
      type: "string",
      description: "Her velger du hva teksten til nedtrekkslista skal være",
      validation: (Rule) =>
        Rule.required().error("Du må huske å gi nedtrekksmenyen et navn"),
    },
    {
      title: "Lenker",
      name: "dropdown",
      type: "array",
      of: [
        {
          type: "navPage",
          // to: [{ type: "page" }, { type: "collection" }, { type: "product" }],
        },
      ],
      description: "Hver velger du hvilke sider som skal være i nedtrekkslista",
      validation: (Rule) =>
        Rule.required().error(
          "Du må huske å legge til hvilke sider du skal ha i nedtrekkslista"
        ),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `${title}`,
        subtitle: `Nedtrekksliste`,
      };
    },
  },
};
