import { sortTypes } from "../studio/schemas/objects/sortSettings";

// Create our sorting fallback titles from Sanity
const sortFallbacks = sortTypes
  .map((type) => `type == "${type.value}" => "${type.title}"`)
  .join(",");

// Construct our "home" and "error" page GROQ
export const homeID = `*[_type=="generalSettings"][0].home->_id`;
export const shopID = `*[_type=="generalSettings"][0].shop->_id`;
export const errorID = `*[_type=="generalSettings"][0].error->_id`;

// Construct our "page" GROQ
const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  "isShop": _id == ${shopID}
`;

// Construct our "link" GROQ
const link = `
  _key,
  _type,
  title,
  url,
  "page": page->{
    ${page}
  }
`;

// Construct our "image meta" GROQ
export const imageMeta = `
  "alt": coalesce(alt, asset->altText),
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`;

// Construct our "portable text content" GROQ
export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.url,
      "isButton": @.isButton,
      "styles": @.styles{style, isLarge, isBlock},
      "page":@.page->{
        ${page}
      }
    }
  },
  _type == "photo" => {
    ${imageMeta}
  }
`;

// Construct our "product" GROQ
export const product = `
{
  "publishDate": coalesce(publishDate, _createdAt),
  "slug": slug.current,
  "id": productID,
  title,
  price,
  comparePrice,
  description,
  "photos": {
    "main": galleryPhotos[]{
      forOption,
      photos[]{
        ${imageMeta}
      }
    },
    "listing": listingPhotos[]{
      forOption,
      "default": listingPhoto{
        ${imageMeta}
      },
      "hover": listingPhotoHover{
        ${imageMeta}
      }
    },
  },
  inStock,
  lowStock,
  useGallery,
  surfaceOption,
}
`;

// options[]{
//   name,
//   position,
//   values[]
// },
// optionSettings[]{
//   forOption,
//   "color": color->color,
// },
// "variants": *[_type == "productVariant" && productID == ^.productID && wasDeleted != true && isDraft != true]{
//   "id": variantID,
//   title,
//   price,
//   comparePrice,
//   inStock,
//   lowStock,
//   options[]{
//     name,
//     position,
//     value
//   },
//   seo
// },
// "klaviyoAccountID": *[_type == "generalSettings"][0].klaviyoAccountID,
// "filters": filters[]{
//   "slug": filter->slug.current,
//   forOption
// }
// Construct our "blocks" GROQ
export const blocks = `
  _type == 'freeform' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    textAlign,
    maxWidth
  },
  _type == 'accordions' => {
    _type,
    _key,
    items[]{
      "id": _key,
      title,
      content[]{
        ${ptContent}
      }
    }
  },
  _type == 'productCard' => {
    _type,
    _key,
    product->${product}
  }
`;

// Construct our content "modules" GROQ
export const modules = `
  _type == 'productHero' => {
    ...,
  },
`;
// "sort": *[_type == "shopSettings"][0].sort{
//   isActive,
//   options[]{
//     "slug": type,
//     "title": coalesce(title, select(
//       ${sortFallbacks}
//     ))
//   }
// },
// "noFilterResults": *[_type == "shopSettings"][0].noFilterResults[]{
//   ${ptContent}
// },

// Construct our "site" GROQ
export const site = `
  "site": {
    
    "settingsGeneral": *[_type == "settingsGeneral"][0]{
      cartDrawerText,
    },

    "cookieConsent": *[_type == "settingsCookies"][0]{
      message,
      "link": link->{
        "slug": slug.current,
        title,
      }
    }, 
    
    "companyInfo": *[_type == "companyInfo"][0]{
      name,
      phoneNumber,
      streetAddress,
      postalCode, 
      region,
      country,
      organizationNumber,
      email,
      "socialMedia": *[_type == "socialMediaLinks"][0]{
        "items": socialMediaLinks[]{
          _type,
          socialMedia,
          url,
        } 
       },
      
    },
   
    "infoBanner": *[_type == "infoBanner"][0]{
      isShown,
      title,
      "link": linkTo->{
        ${link},
        "slug": slug.current,
      }
    },

    "navbar": *[_type == "navbar"][0]{
      "mobile": {
        "items": contentMobile[]{
          ${link},
          dropdown[]{
            ${link}
          }
        }
      },
      "desktop": {
        "items": contentDesktop[]{
          ${link},
          dropdown[]{
            ${link}
          }
        }
      },
    },

    "footer": *[_type == "footer"][0]{
      "blocks": [
        {
          "title": titleCol1,
          "items": contentCol1[]{
              ${link}
            }
        },
        {
          "title": titleCol2,
          "items": contentCol2[]{
              ${link}
            }
        },
        {
          "title": titleCol3,
          "items": contentCol3[]{
              ${link}
            }
        },
        {
          "title": titleCol4,
          "items": contentCol4[]{
              ${link}
            }
        },
      ],
    },

    "seo": *[_type == "seoSettings"][0]{
      metaTitle,
      metaDesc,
      shareTitle,
      shareDesc,
      shareGraphic,
      "favicon": favicon.asset->url,
      "faviconLegacy": faviconLegacy.asset->url,
      touchIcon
    },

    "gtmID": *[_type == "settingsGeneral"][0].googleTagManager,
  }
`;

// All Products
export const allProducts = (preview) => `
  *[_type == "product" && wasDeleted != true && isDraft != true${
    preview?.active ? ' && _id in path("drafts.**")' : ""
  }]${product} | order(title asc)
`;
