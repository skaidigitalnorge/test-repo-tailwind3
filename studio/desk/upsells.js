import S from "@sanity/desk-tool/structure-builder";
import { FaMoneyBillAlt } from "react-icons/fa";

// prettier-ignore
export const upsells = S.listItem()
  .title('Mersalg')
  .icon(FaMoneyBillAlt)
  .child(
    S.documentTypeList('upsellCollection')
      .title("Mersalg")
  )
