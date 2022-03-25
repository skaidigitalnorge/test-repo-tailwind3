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
import footer from "./documents/footer";
import productVariant from "./documents/product-variant";
import redirect from "./documents/redirect";
import linkInternal from "./objects/linkInternal";
import upsellCollections from "./documents/upsellCollections";
import infoBanner from "./documents/infoBanner";
import socialMediaLinks from "./documents/socialMediaLinks";
import simpleText from "./objects/simpleText";
import linkExternal from "./objects/linkExternal";
import settingsSEO from "./documents/settingsSEO";
import settingsGeneral from "./documents/settingsGeneral";
import settingsUpsell from "./documents/settingsUpsell";
import settingsFilter from "./documents/settingsFilter";
import settingsFilterAdmin from "./documents/settingsFilterAdmin";
import socialMedia from "./objects/socialMedia";
import collection from "./documents/collection";
import navPage from "./objects/navPage";
import navDropdown from "./objects/navDropdown";
import collectionGrid from "./modules/collectionGrid";
import pageHero from "./modules/pageHero";
import solidColor from "./documents/color";
import filter from "./documents/filter";
import filterSettings from "./objects/filterSettings";
import sortSettings from "./objects/sortSettings";
import questionAndAnswer from "./objects/questionAndAnswer";
import productHero from "./objects/product-hero";
import settingsCookies from "./documents/settingsCookies";

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
    socialMedia,
    navPage,
    navDropdown,
    filterSettings,
    sortSettings,
    questionAndAnswer,
    productHero,

    // Modules
    faq,
    sectionTitle,
    collectionGrid,
    pageHero,

    // Documents
    page,
    product,
    productVariant,
    navbar,
    footer,
    redirect,
    collection,
    upsellCollections,
    companyInfo,
    settingsSEO,
    infoBanner,
    socialMediaLinks,
    settingsGeneral,
    settingsUpsell,
    settingsFilter,
    settingsCookies,
    settingsFilterAdmin,
    solidColor,
    filter,

    // Singletons
  ]),
});
