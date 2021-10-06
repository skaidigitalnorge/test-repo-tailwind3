import { gql } from "@apollo/client";

export const produkt_query = gql`
  {
    products {
      nodes {
        id
        description
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        name
        slug
        ... on SimpleProduct {
          price
        }
      }
    }
  }
`;

export const kategori_query = gql`
  {
    productCategories {
      nodes {
        id
        name
        slug
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

export const slug_path_query = gql`
  {
    products {
      nodes {
        slug
      }
    }
  }
`;

export const et_produkt_query = (slug) => {
  return gql`
  {
    products(where: {slugIn: "${slug}"}) {
      nodes {
        id
        description
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        name
        slug
        ... on SimpleProduct {
          price
        }
        galleryImages {
          nodes {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;
};

export const et_produkt_query2 = (slug) => {
  return gql`
  { 
  products(where: {slugIn: "${slug}"}) {
    nodes {
      ... on VariableProduct {
        id
        name
        price
        description
        variations {
          nodes {
            image {
              altText
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            attributes {
              nodes {
                value
              }
            }
          }
        }
      }
    }
  }
}`;
};

export const et_produkt_query3_MedRating = (slug) => {
  return gql`
  { 
  products(where: {slugIn: "${slug}"}) {
      nodes {
        ... on VariableProduct {
          variations {
            nodes {
              id
              image {
                altText
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
              attributes {
                nodes {
                  value
                }
              }
            }
          }
          galleryImages {
            nodes {
              sourceUrl
            }
          }
        }
        reviews {
          averageRating
          edges {
            node {
              id
              date
              content(format: RAW)
            }
            rating
          }
        }
      }
    }
}`;
};

// query MyQuery {
//   products {

//     edges {
//       node {
//         ... on VariableProduct {
//           id
//           name
//           variations {
//             edges {
//               node {
//                 attributes {
//                   nodes {
//                     name
//                     value
//                     id
//                   }
//                 }
//                 image {
//                   sourceUrl
//                 }
//                 name
//                 id
//               }
//             }
//           }
//           galleryImages {
//             edges {
//               node {
//                 sourceUrl
//               }
//             }
//           }
//         }

//       }
//     }
//   }
// }
