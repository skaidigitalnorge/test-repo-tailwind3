import S from "@sanity/desk-tool/structure-builder";

// prettier-ignore
export const product = S.listItem()
  .title('Produkt')
  .child(
    S.list()
    .title('Produkter')
    .items([
      S.listItem()
      .title('Hovedprodukt')
      .schemaType('product')
      .child(
        S.editor()
        .schemaType('product')
        .documentId('product')
      ),
        S.divider(),
      S.listItem()
      .title('Produktvarianter')
      .schemaType('productVariant')
      .child(
        S.editor()
        .schemaType('productVariant')
        .documentId('productVariant')
      ),
        S.divider()
      ])
  )
