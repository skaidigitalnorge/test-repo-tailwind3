import {
  getAllProducts,
  getProductByHandle,
  getProductsByCollection,
  updateSanity,
} from "../lib/shopify";

function petter() {
  // async function transform(product) {
  //   const singleProduct = {
  //     _id: product.node.title,
  //     _type: "product",
  //     productTitle: product.node.title,
  //   };

  //   return singleProduct;
  // }

  // const products = getAllProducts();
  // const productsJSON = products.json();
  // const mappedProducts = productsJSON.map(transform);
  // const allProductsWritten = mappedProducts.map((product) =>
  //   client.createOrReplace(product)
  // );
  // allProductsWritten();

  return (
    <div className="m-40">
      <div>
        <button onClick={() => getProducts()}>Print all products</button>
      </div>
      <div>
        <button onClick={() => getProduct("enda-finere-blomster")}>
          Print a product by handle
        </button>
      </div>
      <div>
        <button onClick={() => getProductsCollection("luer", 5)}>
          Print a collection by handle
        </button>
      </div>
      <div>
        <button onClick={() => updateSanityStudio()}>
          Update sanity studio
        </button>
      </div>
    </div>
  );
}

export default petter;

// Dette er Storefront API calls. Under kommer alle som er lagt til.
// Om du mangler noen fields, gi meg beskjed så legger jeg til.

// Syntaxen har denne strukturen som de er lagt til. Den kan også brukes i "getStaticProps" der det er ønskelig.
// Følg da standard struktur.

// Denne under henter de 250 første produktene
const getProducts = async () => {
  const data = await getAllProducts();

  console.log(data);

  return data;
};

// Henter et produkt basert på "handle". Navn: "Fine blomster" = handle: "fine-blomster".
// Kan se ut som handle kan brukes som slug
const getProduct = async (handle) => {
  const data = await getProductByHandle(handle);

  console.log(data);

  return data;
};

const getProductsCollection = async (collection, number) => {
  const data = await getProductsByCollection(collection, number);

  console.log(data);

  return data;
};

const updateSanityStudio = async () => {
  const data = await fetch("http://localhost:3000/api/shopify/updateSanity");
  // await updateSanity();
};
