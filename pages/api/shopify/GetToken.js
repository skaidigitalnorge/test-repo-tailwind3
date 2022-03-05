//
import { gql } from "@apollo/client";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_URL;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;
const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

export default async function handler(req, res) {
  const URL = `https://blemoblomster.myshopify.com/admin/oauth/access_token`;

  const query = 
  {
    client_id: "sdsadf",
    client_secrete: "sadfasdf"
  }
;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Access-Token": adminAccessToken,
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options);
    const jsonData = await data.json();
    console.log(data)
    res.status(200).json(jsonData)
    // return jsonData;
  } catch (error) {
    console.log(error);
    throw new Error("Products not fetched");
  }
}
