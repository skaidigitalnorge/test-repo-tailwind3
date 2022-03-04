import { Icon } from "../../icon";
import React from "react";

export default {
  title: "Lenke",
  name: "link",
  type: "object",
  icon: () => <Icon name="linkExternal" />,
  fields: [
    {
      name: "href",
      type: "url",
      title: "URL",
      description: "Lim inn lenken til siden. F.eks. 'https://nettside.no'",
    },
    {
      title: "Åpne i ny fane?",
      name: "blank",
      description:
        "Aktiver knappen hvis lenker er til en annen nettside. Hvis ikke, la den være grå",
      type: "boolean",
    },
  ],
  preview: {
    title: "object",
    subtitle: "href",
  },
};
