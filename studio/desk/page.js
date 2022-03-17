import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";
import { CgTemplate } from "react-icons/cg";
import { ImHome } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

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
    
      S.divider(),
      S.listItem()
      .title('Andre sider')
      .icon(MdWeb)
      .child(
        S.documentTypeList('page')
      ),
      S.divider(),
    ])
  )
