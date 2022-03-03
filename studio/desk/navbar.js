import S from "@sanity/desk-tool/structure-builder";

// prettier-ignore
export const navbar = S.listItem()
  .title('Moduler')
  .child(
    S.list()
      .title('Informasjon om selskapet')
      .items([
        S.listItem()
        .title('Navigasjon')
        .schemaType('navbar')
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
