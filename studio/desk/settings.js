import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";
import { BsToggles, BsCashCoin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { GiDirectionSign } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";

// prettier-ignore
export const settings = S.listItem()
  .title("Innstillinger")
  .icon(BsToggles)
  .child(
    S.list()
      .title("Innstillinger")
      .items([
        // Generelle innstillinger
        S.listItem()
          .title("Generelle innstillinger")
          .icon(GoSettings)
          .schemaType("settingsGeneral")
          .child(
            S.editor()
              .schemaType("settingsGeneral")
              .documentId("settingsGeneral")
          ),
        S.divider(),

        // Info om selskapet
        S.listItem()
          .title("Info om selskapet")
          .icon(MdAddBusiness)
          .schemaType("companyInfo")
          .child(
            S.editor().schemaType("companyInfo").documentId("companyInfo")
          ),
        S.divider(),

        // Filter (user)
        S.listItem()
          .title("Filter")
          .icon(BiFilterAlt)
          .schemaType("settingsFilter")
          .child(
            S.editor()
              .schemaType("settingsFilter")
              .documentId("settingsFilter")
          ),
        S.divider(),

        // Filter (admin)
        S.listItem()
          .title("Filter (admin)")
          .icon(BiFilterAlt)
          .schemaType("settingsFilterAdmin")
          .child(
            S.editor()
              .schemaType("settingsFilterAdmin")
              .documentId("settingsFilterAdmin")
          ),
        S.divider(),

        // Søkemotoroptimalisering
        S.listItem()
          .title("Søkemotoroptimalisering")
          .icon(AiOutlineGoogle)
          .schemaType("settingsSEO")
          .child(
            S.editor()
              .schemaType("settingsSEO")
              .documentId("settingsSEO")
          ),
        S.divider(),


        // Sociale media
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
        
        // Mersalg
        S.listItem()
          .title("Mersalg")
          .icon(BsCashCoin)
          .schemaType("settingsUpsell")
          .child(
            S.editor()
              .title("Mersalg")
              .schemaType("settingsUpsell")
              .documentId("settingsUpsell")
          ),
        S.divider(),

        // Omdirigeringer
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
