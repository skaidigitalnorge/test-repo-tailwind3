import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";

// prettier-ignore
export const collections = S.listItem()
  .title('Kolleksjoner')
  // .icon(() => (
  //   <Icon name="hamburger"/>
  // ))
  .child(
    S.list()
    .title('Kolleksjoner')
    .items([
        S.listItem()
        .title('Kolleksjoner')
        .child(
            S.documentTypeList('collections')
        ),
        S.divider(),
        S.listItem()
        .title('Upsell-kolleksjoner')
        .child(
            S.documentTypeList('upsellCollection')
        ),
        S.divider(),
  
      ])
  )
