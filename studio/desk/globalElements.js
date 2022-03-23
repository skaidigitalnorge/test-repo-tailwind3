import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { CgToolbarTop, CgToolbarBottom } from "react-icons/cg";
import { BiInfoSquare } from "react-icons/bi";

// prettier-ignore
export const globalElements = S.listItem()
  .title('Globale elementer')
  .icon(RiPlayListAddFill)
  .child(
    S.list()
      .title('Moduler')
      .items([
        S.listItem()
        .title('Navigasjon')
        .schemaType('navbar')
        .icon(CgToolbarTop)
        .child(
          S.editor()
          .title("Navigasjon")
          .schemaType('navbar')
          .documentId('navbar')
        ),
          S.divider(),
          S.listItem()
          .title('Bunntekst')
          .schemaType('footer')
          .icon(CgToolbarBottom)
          .child(
            S.editor()
            .title("Bunntekst")
            .schemaType('footer')
            .documentId('footer')
            ),
            S.divider(),
          S.listItem()
          .title('Informasjonsfane')
          .schemaType('infoBanner')
          .icon(BiInfoSquare)
          .child(
            S.editor()
            .title("Informasjonsfane")
            .schemaType('infoBanner')
            .documentId('infoBanner')
            ),
            S.divider(),
          ])
  )
