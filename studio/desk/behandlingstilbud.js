import S from "@sanity/desk-tool/structure-builder";
import { GoTasklist } from "react-icons/go";

// prettier-ignore
export const behandlingstilbud = S.listItem()
  .title('Behandlingstilbud')
  .schemaType('behandlingstilbud')
  .icon(GoTasklist)
  .child(
    S.editor()
      .title('Behandlingstilbud')
      .schemaType('behandlingstilbud')
      .documentId('behandlingstilbud')
  )
