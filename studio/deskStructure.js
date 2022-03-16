import SocialPreview from "part:social-preview/component";

import S from "@sanity/desk-tool/structure-builder";
import { modules } from "./desk/modules";
import { page } from "./desk/page";
import { product } from "./desk/product";
import { settings } from "./desk/settings";
import { collections } from "./desk/collections";
import { upsells } from "./desk/upsells";
import { productVariants } from "./desk/productVariants";

export default () => {
  return S.list().title("Bliss Flowerbox").items([
    page,
    S.divider(),
    product,
    productVariants,
    S.divider(),
    collections,
    upsells,
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
