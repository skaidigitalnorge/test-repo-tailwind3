import { FiLink } from "react-icons/fi";

export default {
  title: "Page",
  name: "navPage",
  type: "object",
  icon: FiLink,
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      description:
        "Dette er teksten som faktisk kommer til å stå på skjermen når brukeren trykker på lenken under",
      validation: (Rule) =>
        Rule.required().error(
          "Husk å skriv hvilken tekst som skal stå når du lenker til siden under"
        ),
    },
    {
      title: "Linker til",
      name: "page",
      type: "reference",
      options: {
        disableNew: true,
      },
      description: "Skriv hvilken side du ønsker å lage en lenke til",
      to: [{ type: "page" }, { type: "collection" }, { type: "product" }],
      validation: (Rule) =>
        Rule.required().error(
          "Du må legge til hvilken side du ønsker å linke til"
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
        subtitle: `Lenke`,
      };
    },
  },
};
