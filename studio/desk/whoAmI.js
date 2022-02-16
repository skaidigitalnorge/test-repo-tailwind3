import S from "@sanity/desk-tool/structure-builder";
import { BsInfoSquareFill } from "react-icons/bs";

// prettier-ignore
export const whoAmI = S.listItem()
  .title('Hvem er jeg')
  .schemaType('whoAmI')
  .icon(BsInfoSquareFill)
  .child(
    S.editor()
      .title('Innstillinger til forsiden')
      .schemaType('whoAmI')
      .documentId('whoAmI')
  )
