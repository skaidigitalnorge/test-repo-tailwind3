import React from "react";
import { CheckSquare, Lightning } from "phosphor-react";
import { getSwatch } from "../../../lib/helpers";

export const getIcon = (type, color) => {
  switch (type) {
    case "swatch":
      return getSwatch(color);
    case "dynamic":
      return <Lightning />;
    default:
      return <CheckSquare />;
  }
};

export default {
  title: "Filter",
  name: "filter",
  type: "document",
  fields: [
    {
      title: "Filtertype",
      name: "type",
      type: "string",
      description: 'Velg enten "Farge" eller "Tekst"',
      options: {
        list: [
          { title: "Tekst", value: " " },
          { title: "Farge", value: "swatch" },
        ],
      },
      initialValue: " ",
    },
    {
      title: "Navn",
      name: "title",
      type: "string",
      description: 'For eksempel: "M", "Blue", eller "Nytt"',
    },
    {
      title: "Nettstedsadresse",
      name: "slug",
      type: "slug",
      description: "Påkrevd",
      options: {
        source: "title",
        maxLength: 30,
      },
    },
    {
      title: "Farge",
      name: "color",
      type: "reference",
      to: [{ type: "solidColor" }],
      hidden: ({ parent }) => {
        return parent.type !== "swatch";
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      type: "type",
      color: "color.color",
    },
    prepare({ title = "Untitled", type, color }) {
      const displayType = type && type.trim() ? type : "simple";

      return {
        title,
        // subtitle: displayType,
        media: getIcon(displayType, color?.hex.toUpperCase()),
      };
    },
  },
};
