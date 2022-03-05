import Shopify from 'shopify-api-node'

export default async function handler (req, res) {
  const URL = `https://blemoblomster.myshopify.com/admin/api/2022-01/graphql.json`;

  const shopify = new Shopify({
    shopName: 'blemoblomster',
    apiKey: '077facdbea88eb386d06a6a8aac1b1e9',
    password: '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'
  });
  const tags = "wholesale"
  try {
    const customers = await shopify.customer
      .list({
        // ids:6335234769125,
        query:"wholesale",
        // tags:"wholesale",
        fields: ["first_name", "last_name", "tags"]
      });
    console.log(customers);
    res.status(200).send(customers)
    // const customers = await shopify.customer
    // .create({email: 'test@skaidigital.no', first_name: "Test", last_name: "Testest", tags: "wholesale"})
    // console.log(customers);
    // res.status(200).send(customers)
  // const scope = await shopify.accessScope.list();
  // console.log(scope);
  // res.status(200).send(scope)
  } catch(error) {
    console.log(error);
  }
}

// //
// import { gql } from "@apollo/client";

// const domain = process.env.NEXT_PUBLIC_SHOPIFY_URL;
// const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;
// const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESSTOKEN;

// export default async function handler(req, res) {
//   const URL = `https://blemoblomster.myshopify.com/admin/api/2022-01/graphql.json`;

//   const query = `
//   {
//     customers(first: 1) {
//       edges {
//         node {
//           displayName
//           id
//         }
//       }
//     }
//   }
//   `;

//   const options = {
//     endpoint: URL,
//     method: "POST",
//     headers: {
//       "X-Shopify-Access-Token": "c839439b23ef278236192d83228716b0",
//       // Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   };

//   try {
//     const data = await fetch(URL, options);
//     const jsonData = await data.json();
//     console.log(data)
//     res.status(200).json(jsonData)
//     // return jsonData;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Products not fetched");
//   }
// }
