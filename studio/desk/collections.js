import S from "@sanity/desk-tool/structure-builder";
import { BsCollectionFill } from "react-icons/bs";

// prettier-ignore
export const collections = S.listItem()
  .title('Kolleksjoner')
  .icon(BsCollectionFill)
  .child(
    S.documentTypeList('collection')
      .title("Kolleksjoner")
  )
