import S from "@sanity/desk-tool/structure-builder";
import { globalElements } from "./desk/globalElements";
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
    collections,
    S.divider(),
    // upsells,
    // S.divider(),
    globalElements,
    S.divider(),
    settings,
    S.divider(),
  ]);
};
