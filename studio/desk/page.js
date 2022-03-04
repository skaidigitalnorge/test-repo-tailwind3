import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";

// prettier-ignore
export const page = S.listItem()
  .title('Sider')
  .schemaType('page')
  .child(
    S.list()
    .title('Forsiden')
    .items([
      S.listItem()
      .title('Forsiden')
      .icon(() => (
        <Icon name="home"/>
      ))
      .child(
        S.editor()
        .title('Forsiden')
        .schemaType('page')
        .documentId('frontPage')
        ),
        S.divider(),
        S.listItem()
        .title('Om-siden')
        .icon(() => (
          <Icon name="person"/>
        ))
      .child(
        S.editor()
        .title('Om-siden')
        .schemaType('page')
        .documentId('aboutPage')
      ),
      S.divider(),
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
