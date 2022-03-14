// // src/index.ts
// import Shopify, { ApiVersion, AuthQuery } from "@shopify/shopify-api";

// export default async function handler(req, res) {
//   const { API_KEY, API_SECRET_KEY, SCOPES, SHOP, HOST, ADMIN_KEY } =
//     process.env;

//   //   Shopify.Context.initialize({
//   //     API_KEY,
//   //     API_SECRET_KEY,
//   //     SCOPES: [SCOPES],
//   //     HOST_NAME: process.env.HOST.replace(/https:\/\//, ""),
//   //     IS_EMBEDDED_APP: false,
//   //     API_VERSION: ApiVersion.January22, // all supported versions are available, as well as "unstable" and "unversioned"
//   //   });
//   //   const ACTIVE_SHOPIFY_SHOPS = {};

//   //   const session = await Shopify.Utils.loadCurrentSession(req, res).then(
//   //     console.log(res)
//   //   );
//   //   console.log(session);

//   const session = await Shopify.Session.MemorySessionStorage();

//   const client = new Shopify.Clients.Graphql(SHOP, ADMIN_KEY);
//   const query = "tag:wholesale";
//   try {
//     const response = await client.query({
//       data: `
//       {
//         customers(first: 3, query:"${query}") {
//           edges {
//             node {
//               firstName
//               lastName
//               tags
//             }
//           }
//         }
//       }
//       `,
//     });
//     // console.log(response);

//     res.status(200).send(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
