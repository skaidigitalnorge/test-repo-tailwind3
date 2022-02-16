import S from "@sanity/desk-tool/structure-builder";
import { FaHome } from "react-icons/Fa";

// prettier-ignore
export const homepage = S.listItem()
  .title('Forsiden')
  .schemaType('homepage')
  .icon(FaHome) 
  .child(
    S.editor()
      .title('Innstillinger til forsiden')
      .schemaType('homepage')
      .documentId('homepage')
  )
