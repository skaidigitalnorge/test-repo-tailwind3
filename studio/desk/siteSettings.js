import S from "@sanity/desk-tool/structure-builder";
import { IoSettings } from "react-icons/io";

// prettier-ignore
export const siteSettings = S.listItem()
  .title('Sideinnstillinger')
  .schemaType('siteSettings')
  .icon(IoSettings)
  .child(
    S.editor()
      .title('Sideinnstillinger')
      .schemaType('siteSettings')
      .documentId('siteSettings')
  )
