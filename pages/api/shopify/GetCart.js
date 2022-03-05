//
import { gql } from "@apollo/client";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_URL;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

export default async function handler(req, res) {
  const URL = `https://blemoblomster.myshopify.com/api/2021-10/graphql.json`;

  const mutation = `
    mutation {
      products(first: 250) {
        edges {
          node {
            handle
            id
            priceRange{
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  altText
                  height
                  width
                  src
                }
              }
            }
          }
        }
      }
    }
  `;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mutation }),
  };

  try {
    const data = await fetch(URL, options);
    const jsonData = await data.json();

    res.status(200).json(jsonData)
    // return jsonData;
  } catch (error) {
    console.log(error);
    throw new Error("Didn't fetch cart");
  }
}
