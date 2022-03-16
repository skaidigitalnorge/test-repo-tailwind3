import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { CgInternal } from "react-icons/cg";

const linkExternalRender = ({ children }) => (
  <span style={{ background: "" }}>
    {children}
    <span style={{ marginLeft: "8px" }}>
      <BiLinkExternal />
    </span>
  </span>
);
const linkInternalRender = ({ children }) => (
  <span style={{ background: "" }}>
    {children}
    <span style={{ marginLeft: "8px" }}>
      <CgInternal />
    </span>
  </span>
);

export default {
  title: "Innhold",
  name: "simpleText",
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
          title: "Normal",
          value: "normal",
        },
      ],
      type: "block",
      marks: {
        annotations: [
          {
            title: "Eksternlenke",
            name: "linkExternal",
            type: "object",
            fields: [
              {
                name: "linkExternal",
                type: "linkExternal",
                title: "Lenke til ekstern nettside",
              },
            ],
            blockEditor: {
              icon: BiLinkExternal,
              render: linkExternalRender,
            },
          },
          {
            title: "Internlenke",
            name: "linkInternal",
            type: "object",
            fields: [
              {
                name: "linkInternal",
                type: "linkInternal",
                title: "Lenke til egen siden",
              },
            ],
            blockEditor: {
              icon: CgInternal,
              render: linkInternalRender,
            },
          },
        ],
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
      },
    },
  ],
};
