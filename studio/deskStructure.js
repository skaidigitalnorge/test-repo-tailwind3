import SocialPreview from "part:social-preview/component";

import S from "@sanity/desk-tool/structure-builder";
import { modules } from "./desk/navbar";
import { page } from "./desk/page";
import { product } from "./desk/product";
import { settings } from "./desk/settings";
import { collections } from "./desk/collections";

export default () => {
  return S.list().title("Gjør endringer her").items([
    page,
    S.divider(),
    product,
    collections,
    S.divider(),
    modules,
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
