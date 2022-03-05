import { assertValidExecutionArguments } from "graphql/execution/execute";
import { useState } from "react";

// import { getProduct } from '../test/getProducts'

// const session = await Shopify.Utils.loadCurrentSession(req, res);
// const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);
// const response = await client.query({data: '{your_query}'});

function petter() {
  const [produkter, setProdukter] = useState(false);
  // const renderData = async() => {
  //     setProdukter(!produkter);
  //     const ut = await getProduct();
  //     console.log(ut)
  //     const ut2 = ut?.products?.edges?.map((etProdukt) => {
  //         <div>{etProdukt.node.handle}</div>
  //     })
  //     if (produkter) {
  //         return ut2;
  //     } else {
  //         return null;
  //     }
  // }
  return (
    <div className="m-40">
      <div>
        <button onClick={() => getCustomers()}>Print customers</button>
      </div>
      <div>
        <button onClick={() => getTesten()}>Test</button>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
      <div>
        <button onClick={() => getCart()}>Print cart</button>
      </div>
      <div>
        <button onClick={() => getProduct()}>Print products</button>
      </div>
    </div>
  );
}

export default petter;

const getProduct = async () => {
  const data = await fetch("http://localhost:3000/api/shopify/GetAllProducts");
  const jsonData = await data.json();

  console.log(jsonData.data.products.edges);

  return jsonData;
};

const getCart = async () => {
  const data = await fetch("http://localhost:3000/api/shopify/GetCart");
  const jsonData = await data.json();
  console.log(jsonData);
  // console.log(jsonData.data.products.edges);
  return jsonData;
};

const getCustomers = async () => {
  const data = await fetch("http://localhost:3000/api/shopify/GetAllCustomers");
  const jsonData = await data.json();
  console.log(jsonData);

  return jsonData;
};

const getTesten = async () => {
  const data = await fetch("http://localhost:3000/api/shopify/NyVersjon");
  const jsonData = await data.json();
  console.log(jsonData.body.data.customers.edges);

  return jsonData.body.data.customers;
};
