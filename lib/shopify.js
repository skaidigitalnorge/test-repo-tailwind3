// // @ts-ignore
// import Client from "shopify-buy";
// import { isBrowser } from "/lib/helpers";

// // First, check that Shopify variables are set
// const hasShopify =
//   process.env.SHOPIFY_STORE_ID && process.env.SHOPIFY_API_TOKEN;

// // Warn the client if variables are missing
// if (!hasShopify && isBrowser) {
//   console.warn("Shopify .env variables are missing");
// }

// // Otherwise, setup the client and export
// const options = {
//   domain: `${process.env.SHOPIFY_STORE_ID}.myshopify.com`,
//   storefrontAccessToken: process.env.SHOPIFY_API_TOKEN,
// };

// export default hasShopify ? Client.buildClient(options) : null;

// const { STOREFRONT_ACCESSTOKEN, SHOP, API_VERSIO } = process.env;

const domain = process.env.SHOP;
const storefrontAccessToken = process.env.STOREFRONT_ACCESSTOKEN;
const apiversion = process.env.API_VERSION;

// const domain = "blemoblomster.myshopify.com";
// const storefrontAccessToken = "98de6e75146d2e2542dd3c8f74b1211a";
// const apiversion = "2022-01";

async function ShopifyData(query) {
  const URL = `https://${domain}/api/${apiversion}/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getAllProducts(first) {
  const int = first ? first : 250;

  const query = `
  {
    products(first: ${int}) {
      edges {
        node {
          title
        }
      }
    }
  }
  `;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}

export async function getProductByHandle(handle) {
  const query = `
  {
    product(handle:"${handle}") {

      id
      title
      handle
      featuredImage {
        url
        width
        height
        altText
      }
    }
  }
  `;

  const response = await ShopifyData(query);

  const product = response.data.product ? response.data.product : [];

  return product;
}

// Henter alle produkter i en Collection. Dette kan brukes i praksis som kategorier.
export async function getProductsByCollection(handle, first) {
  const int = first ? first : 250;
  const query = `
  {
    collection(handle:"${handle}") {
      products(first:${int}) {
        edges {
          node {
            handle
            id
            title
          }
        }
      }
      title
    }
  }
  `;

  const response = await ShopifyData(query);

  const productCollection = response.data.collection
    ? response.data.collection
    : [];

  return productCollection;
}
