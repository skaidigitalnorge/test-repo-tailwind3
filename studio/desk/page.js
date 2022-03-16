import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";
import { CgTemplate } from "react-icons/cg";
import { ImHome } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";

// prettier-ignore
export const page = S.listItem()
  .title('Sider')
  .schemaType('page')
  .icon(CgTemplate)
  .child(
    S.list()
    .title('Forsiden')
    .items([
      S.listItem()
      .title('Forsiden')
      .icon(ImHome)
      .child(
        S.editor()
        .title('Forsiden')
        .schemaType('page')
        .documentId('frontPage')
        ),
        S.listItem()
        .title('Om-siden')
        .icon(BsPersonSquare)
      .child(
        S.editor()
        .title('Om-siden')
        .schemaType('page')
        .documentId('aboutPage')
      ),
      S.listItem()
      .title('Annen side')
      .child(
        S.editor()
        .title('Annen side')
        .schemaType('page')
        .documentId('anotherPage')
      ),
      S.divider(),
      S.listItem()
      .title('Andre sider')
      .child(
        S.documentTypeList('page')
      ),
      S.divider(),
    ])
  )

const pageIcon = (
  <svg
    version="1.1"
    baseProfile="tiny"
    id="Layer_1"
    xmlnsX="&ns_extend;"
    xmlnsI="&ns_ai;"
    xmlnsGraph="&ns_graphs;"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlnsA="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
    x="0px"
    y="0px"
    width="24px"
    height="24px"
    viewBox="0 0 42 42"
    xmlSpace="preserve"
  >
    <path
      fill="#334155"
      fillRule="evenodd"
      d="M22.5,1.5h-14c-2.55,0-3,0.561-3,3v32c0,2.49,0.55,3,3,3h24c2.5,0,3-0.47,3-3v-22h-13V1.5z M35.5,11.5
    l-10-10v10H35.5z"
    />
  </svg>
);
