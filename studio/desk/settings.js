import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";
import { BsToggles } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { GiDirectionSign } from "react-icons/gi";

// prettier-ignore
export const settings = S.listItem()
  .title("Innstillinger")
  .icon(BsToggles)
  .child(
    S.list()
      .title("Innstillinger")
      .items([
        S.listItem()
          .title("Info om selskapet")
          .icon(MdAddBusiness)
          .schemaType("companyInfo")
          .child(
            S.editor().schemaType("companyInfo").documentId("companyInfo")
          ),
        S.divider(),
        S.listItem()
          .title("Globale innstillinger")
          .icon(FaGlobeAfrica)
          .schemaType("settingsGeneral")
          .child(
            S.editor()
              .schemaType("settingsGeneral")
              .documentId("settingsGeneral")
          ),
        S.divider(),
        S.listItem()
          .title("Sosiale medier")
          .icon(GrFacebook)
          .schemaType("socialMediaLinks")
          .child(
            S.editor()
              .title("SoMe-lenker")
              .schemaType("socialMediaLinks")
              .documentId("socialMediaLinks")
          ),
        S.divider(),
        S.listItem()
          .title("Omdirigeringer")
          .icon(GiDirectionSign)
          .schemaType("redirect")
          .child(
            S.documentTypeList('redirect')
          ),
        S.divider(),
      ])
  );
