import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";

// prettier-ignore
export const settings = S.listItem()
  .title("Innstillinger")
  .icon(() => (
    <Icon name="settings"/>
  ))
  .child(
    S.list()
      .title("Alle innstillinger her")
      .items([
        S.listItem()
          .title("Info om selskapet")
          .icon(() => (
            <Icon name="info" color="black"/>
          ))
          .schemaType("companyInfo")
          .child(
            S.editor().schemaType("companyInfo").documentId("companyInfo")
          ),
        S.divider(),
        S.listItem()
          .title("Globale innstillinger")
          .icon(() => (
            <Icon name="settings" color="black"/>
          ))
          .schemaType("settingsGeneral")
          .child(
            S.editor()
              .schemaType("settingsGeneral")
              .documentId("settingsGeneral")
          ),
        S.divider(),
        S.listItem()
          .title("Redirects")
          .icon(() => (
            <Icon name="redirect"/>
          ))
          .schemaType("redirect")
          .child(
            S.documentTypeList('redirect')
          ),
        S.divider(),
      ])
  );
