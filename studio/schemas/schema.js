// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Schema imports
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import richText from "./objects/richText";
import faq from "./modules/faq";
import richImage from "./richImage";
import sectionTitle from "./modules/section-title";
import metaInfo from "./objects/metaInfo";
import product from "./documents/product";
import link from "./objects/linkExternal";
import navbar from "./documents/navbar";
import linkList from "./objects/linkList";
import companyInfo from "./documents/companyInfo";
import settingsGeneral from "./documents/settings-general";
import footer from "./documents/footer";
import productVariant from "./documents/product-variant";
import redirect from "./documents/redirect";
import linkInternal from "./objects/linkInternal";
import collections from "./documents/collections";
import upsellCollections from "./documents/upsellCollections";
import infoBanner from "./documents/infoBanner";
import socialMediaLinks from "./documents/socialMediaLinks";
import simpleText from "./objects/simpleText";
import linkExternal from "./objects/linkExternal";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // Objects
    richText,
    simpleText,
    richImage,
    metaInfo,
    linkExternal,
    linkInternal,
    linkList,

    // Modules
    faq,
    sectionTitle,

    // Documents
    page,
    product,
    productVariant,
    navbar,
    footer,
    redirect,
    collections,
    upsellCollections,
    companyInfo,
    settingsGeneral,
    infoBanner,
    socialMediaLinks,

    // Singletons
  ]),
});
