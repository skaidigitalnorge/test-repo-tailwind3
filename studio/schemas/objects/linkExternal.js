import { Icon } from "../../icon";
import React from "react";

export default {
  title: "Eksternlenke",
  name: "linkExternal",
  type: "object",
  icon: () => <Icon name="linkExternal" />,
  fields: [
    {
      name: "href",
      type: "url",
      title: "URL",
      description: "Lim inn lenken til siden. F.eks. 'https://nettside.no'",
      validation: (Rule) =>
        Rule.required()
          .uri({
            allowRelative: true, // Allow relative links
            relativeOnly: false, // Force only relative links
            scheme: ["https", "http", "mailto", "tel"], // Default is ["https", "http"]
          })
          .error("Det der ser ikke ut som en gyldig lenke"),
    },
  ],
  preview: {
    title: "object",
    subtitle: "href",
  },
};
