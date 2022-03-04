import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";

// prettier-ignore
export const modules = S.listItem()
  .title('Moduler')
  .icon(() => (
    <Icon name="grid"/>
  ))
  .child(
    S.list()
      .title('Informasjon om selskapet')
      .items([
        S.listItem()
        .title('Navigasjon')
        .schemaType('navbar')
        .icon(() => (
          <Icon name="hamburger"/>
        ))
        .child(
          S.editor()
          .schemaType('navbar')
          .documentId('navbar')
        ),
          S.divider(),
          S.listItem()
          .title('Bunnseksjon')
          .schemaType('footer')
          .child(
            S.editor()
            .schemaType('footer')
            .documentId('footer')
            ),
            S.divider(),
          ])
  )
