import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";

// prettier-ignore
export const product = S.listItem()
  .title('Produkt')
  // .icon(() => (
  //   <Icon name="hamburger"/>
  // ))
  .child(
    S.list()
    .title('Produkter')
    .items([
      S.listItem()
      .title('Hovedprodukt')
      .schemaType('product')
      .child(
        S.documentTypeList('product')
      ),
        S.divider(),
      S.listItem()
      .title('Produktvarianter')
      .schemaType('productVariant')
      .child(
        S.documentTypeList('productVariant')
      ),
        S.divider()
      ])
  )
