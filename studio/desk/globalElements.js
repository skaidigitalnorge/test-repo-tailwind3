import S from "@sanity/desk-tool/structure-builder";
import { CgToolbarTop, CgToolbarBottom } from "react-icons/cg";
import { BiInfoSquare } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";

// prettier-ignore
export const globalElements = S.listItem()
  .title('Globale elementer')
  .icon(FaGlobeAmericas)
  .child(
    S.list()
      .title('Moduler')
      .items([
        S.listItem()
        .title('Navigasjon')
        .schemaType('navbar')
        .icon(CgToolbarTop)
        .child(
          S.editor()
          .title("Navigasjon")
          .schemaType('navbar')
          .documentId('navbar')
        ),
          S.divider(),
          S.listItem()
          .title('Bunntekst')
          .schemaType('footer')
          .icon(CgToolbarBottom)
          .child(
            S.editor()
            .title("Bunntekst")
            .schemaType('footer')
            .documentId('footer')
            ),
            S.divider(),
          S.listItem()
          .title('Informasjonsfane')
          .schemaType('infoBanner')
          .icon(BiInfoSquare)
          .child(
            S.editor()
            .title("Informasjonsfane")
            .schemaType('infoBanner')
            .documentId('infoBanner')
            ),
            S.divider(),
          ])
  )
