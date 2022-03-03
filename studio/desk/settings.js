import S from "@sanity/desk-tool/structure-builder";

// prettier-ignore
export const settings = S.listItem()
.title('Innstillinger')
.child(
  S.list()
    .title('Alle innstillinger her')
    .items([
        S.listItem()
        .title('Info om selskapet')
        .schemaType('companyInfo')
        .child(
            S.editor()
            .schemaType('companyInfo')
            .documentId('companyInfo')
        ),
        S.divider(),
        S.listItem()
        .title('Globale innstillinger')
        .schemaType('settingsGeneral')
        .child(
            S.editor()
            .schemaType('settingsGeneral')
            .documentId('settingsGeneral')
            ),
            S.divider(),
        ])
)
