// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import richText from "./objects/richText";
import faq from "./modules/faq";
import richImage from "./richImage";
import sectionTitle from "./modules/section-title";
import metaInfo from "./objects/metaInfo";
import product from "./documents/product";
import link from "./objects/link";
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

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Objects
    richText,
    richImage,
    metaInfo,
    link,
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

    // Singletons
  ]),
});
