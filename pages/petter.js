import {
  getAllProducts,
  getProductByHandle,
  getProductsByCollection,
  updateSanity,
} from "../lib/shopify";
import { sanityClient } from "../lib/sanity";

function petter() {
  // console.log(first);
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
        <button onClick={() => getProducts()}>
          Print all products from Shopify
        </button>
      </div>
      <div>
        <button onClick={() => getProduct("enda-finere-blomster")}>
          Print a product by handle
        </button>
      </div>
      {/* <div>
        <button onClick={() => getProductsCollection("luer", 5)}>
          Print a collection by handle
        </button>
      </div> */}
      {/* <div>
        <button onClick={() => updateSanityStudio()}>
          Update sanity studio
        </button>
      </div> */}
      <div>
        <button onClick={() => getSanityDokuments()}>
          Print all sanity documents
        </button>
      </div>
      <div>
        <button onClick={() => testManuelSyncCal()}>
          Test av manuel sync cal
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

const testManuelSyncCal = () => {
  fetch("http://localhost:3000/api/shopify/product-update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-shopify-hmac-sha256": "vvf7YkcumnhrGp28a59ndQNeADQnu3cVEkmdJ4RXNbg=",
      "x-shopify-topic": "product/create",
    },
    body: JSON.stringify(bodyJson),
  });
  // await updateSanity();
};
const bodyJson = {
  id: "788032119674292900",
  title: "Example T-Shirt",
  body_html: null,
  vendor: "Acme",
  product_type: "Shirts",
  created_at: null,
  handle: "example-t-shirt",
  updated_at: "2022-03-18T11:00:06+01:00",
  published_at: "2022-03-18T11:00:06+01:00",
  template_suffix: null,
  status: "active",
  published_scope: "web",
  tags: "example, mens, t-shirt",
  admin_graphql_api_id: "gid://shopify/Product/788032119674292922",
  variants: [
    {
      id: 642667041472714000,
      product_id: 788032119674292900,
      title: "",
      price: "19.99",
      sku: "example-shirt-s",
      position: 0,
      inventory_policy: "deny",
      compare_at_price: "24.99",
      fulfillment_service: "manual",
      inventory_management: "shopify",
      option1: "Small",
      option2: null,
      option3: null,
      created_at: null,
      updated_at: null,
      taxable: true,
      barcode: null,
      grams: 200,
      image_id: null,
      weight: 200,
      weight_unit: "g",
      inventory_item_id: null,
      inventory_quantity: 75,
      old_inventory_quantity: 75,
      requires_shipping: true,
      admin_graphql_api_id: "gid://shopify/ProductVariant/642667041472713922",
    },
    {
      id: 757650484644203900,
      product_id: 788032119674292900,
      title: "",
      price: "19.99",
      sku: "example-shirt-m",
      position: 0,
      inventory_policy: "deny",
      compare_at_price: "24.99",
      fulfillment_service: "manual",
      inventory_management: "shopify",
      option1: "Medium",
      option2: null,
      option3: null,
      created_at: null,
      updated_at: null,
      taxable: true,
      barcode: null,
      grams: 200,
      image_id: null,
      weight: 200,
      weight_unit: "g",
      inventory_item_id: null,
      inventory_quantity: 50,
      old_inventory_quantity: 50,
      requires_shipping: true,
      admin_graphql_api_id: "gid://shopify/ProductVariant/757650484644203962",
    },
  ],
  options: [
    {
      id: 527050010214937800,
      product_id: 788032119674292900,
      name: "Title",
      position: 1,
      values: ["Small", "Medium"],
    },
  ],
  images: [
    {
      id: 539438707724640960,
      product_id: 788032119674292900,
      position: 0,
      created_at: null,
      updated_at: null,
      alt: null,
      width: 323,
      height: 434,
      src: "//cdn.shopify.com/shopifycloud/shopify/assets/shopify_shirt-39bb555874ecaeed0a1170417d58bbcf792f7ceb56acfe758384f788710ba635.png",
      variant_ids: [],
      admin_graphql_api_id: "gid://shopify/ProductImage/539438707724640965",
    },
  ],
  image: null,
};

const getSanityDokuments = async () => {
  const test = await sanityClient.fetch('*[_type == "product"]');
  const alleDokumenter = await sanityClient.getDocument(
    "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc1MTExNzk4NTQwNTM="
      .slice(0, -1)
      .toLowerCase()
  );
  console.log(alleDokumenter);
  console.log(test);
};
