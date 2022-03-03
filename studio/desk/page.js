import S from "@sanity/desk-tool/structure-builder";

// prettier-ignore
export const page = S.listItem()
  .title('Sider')
  .schemaType('page')
  .child(
    S.documentTypeList('page')
    .title('Alle sider')
  )
