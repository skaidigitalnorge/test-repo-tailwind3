import S from "@sanity/desk-tool/structure-builder";
import { Icon } from "../icon";
import React from "react";
import { BsToggles, BsCashCoin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { GiDirectionSign } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import { BiFilterAlt, BiCookie } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { RiArrowLeftRightLine } from "react-icons/ri";

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
          .child(
            S.documentTypeList('filter')
            .title("Filter")
          ),
        S.divider(),

        // Filter (admin)
        S.listItem()
          .title("Filter (admin)")
          .icon(BiFilterAlt)
          .schemaType("settingsFilterAdmin")
          .child(
            S.editor()
              .title("Filter (Admin)")
              .schemaType("settingsFilterAdmin")
              .documentId("settingsFilterAdmin")
          ),
        S.divider(),
     
        // Cookie settings
        S.listItem()
          .title("Cookie-innstillinger")
          .icon(BiCookie)
          .schemaType("settingsCookies")
          .child(
            S.editor()
              .title("Cookie-innstillinger")
              .schemaType("settingsCookies")
              .documentId("settingsCookies")
          ),
        S.divider(),

        // ! Søkemotoroptimalisering. Har lagt inn meta description i generelle innstillinger og bilde er lastet opp under info om selskapet. Får se om denne blir nødvendig i det hele tatt.
        // S.listItem()
        //   .title("Søkemotoroptimalisering")
        //   .icon(AiOutlineGoogle)
        //   .schemaType("settingsSEO")
        //   .child(
        //     S.editor()
        //       .schemaType("settingsSEO")
        //       .documentId("settingsSEO")
        //   ),
        // S.divider(),


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
        
        // Farger
        S.listItem()
          .title("Farger")
          .icon(AiOutlineBgColors)
          .child(
            S.documentTypeList('solidColor')
             .title("Farger")
          ),
        S.divider(),

        // Omdirigeringer
        S.listItem()
          .title("Omdirigeringer")
          .icon(RiArrowLeftRightLine)
          .schemaType("redirect")
          .child(
            S.documentTypeList('redirect')
          ),
        S.divider(),

      ])
  );
