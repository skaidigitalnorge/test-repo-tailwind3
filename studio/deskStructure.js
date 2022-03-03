import S from "@sanity/desk-tool/structure-builder";
import { navbar } from "./desk/navbar";
import { page } from "./desk/page";
import { product } from "./desk/product";
import { settings } from "./desk/settings";

export default () => {
  return S.list().title("Gjør endringer her").items([
    page,
    S.divider(),
    product,
    S.divider(),
    navbar,
    S.divider(),
    settings,
    S.divider(),
    //
    //
    // Add desk items here
    //
    //
  ]);
};
