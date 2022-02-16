import S from "@sanity/desk-tool/structure-builder";
import { behandlingstilbud } from "./desk/behandlingstilbud";
import { homepage } from "./desk/homepage";
import { siteSettings } from "./desk/siteSettings";
import { whoAmI } from "./desk/whoAmI";

export default () => {
  return S.list()
    .title("Gjør endringer her")
    .items([homepage, whoAmI, siteSettings, behandlingstilbud]);
};
