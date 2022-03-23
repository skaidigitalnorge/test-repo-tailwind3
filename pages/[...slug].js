// import { Layout } from "../components/layout";
// import { Module } from "../components/modules";
// import { useState, useEffect } from "react";

function Page({ data }) {
  // // set our Product state
  // const [product, setProduct] = useState(page.product);

  // // find the default variant for this product by matching against the first product option
  // const defaultVariant = page.product.variants?.find((v) => {
  //   const option = {
  //     name: page.product.options?.[0]?.name,
  //     value: page.product.options?.[0]?.values[0],
  //     position: page.product.options?.[0]?.position,
  //   };
  //   return hasObject(v.options, option);
  // });

  // const defaultVariantID = defaultVariant?.id ?? page.product.variants[0].id;

  // // set up our variant URL params
  // const [currentParams, setCurrentParams] = useParams([
  //   {
  //     name: "variant",
  //     value: defaultVariantID,
  //   },
  // ]);
  // const previousParams = usePrevious(currentParams);

  // // determine which params set to use
  // const activeParams =
  //   isPageTransition && previousParams ? previousParams : currentParams;

  // // find our activeVariantID ID
  // const paramVariantID = activeParams.find(
  //   (filter) => filter.name === "variant"
  // ).value;
  // const foundVariant = page.product.variants?.find(
  //   (v) => v.id == paramVariantID
  // );
  // const activeVariantID = foundVariant ? paramVariantID : defaultVariantID;

  // // handle variant change
  // const updateVariant = useCallback(
  //   (id) => {
  //     const isValidVariant = page.product.variants.find((v) => v.id == id);

  //     setCurrentParams([
  //       ...activeParams,
  //       {
  //         name: "variant",
  //         value: isValidVariant ? `${id}` : defaultVariantID,
  //       },
  //     ]);
  //   },
  //   [activeParams]
  // );

  // // check our product inventory is still correct
  // const { data: productInventory } = useSWR(
  //   ["/api/shopify/product-inventory", page.product.id],
  //   (url, id) => fetchInventory(url, id),
  //   { errorRetryCount: 3 }
  // );

  // // rehydrate our product after inventory is fetched
  // useEffect(() => {
  //   if (page.product && productInventory) {
  //     setProduct({
  //       ...page.product,
  //       inStock: productInventory.inStock,
  //       lowStock: productInventory.lowStock,
  //       variants: [
  //         ...page.product.variants.map((v) => {
  //           const newInventory = productInventory.variants.find(
  //             (nv) => nv.id === v.id
  //           );
  //           return newInventory ? { ...v, ...newInventory } : v;
  //         }),
  //       ],
  //     });
  //   }
  // }, [page.product, productInventory]);

  // if (product) {
  //   <Layout
  //     site={product.site}
  //     page={product.page}
  //     // schema={}
  //   >
  //     {product.page?.modules?.map((module, key) => {
  //       <Module
  //         key={key}
  //         index={key}
  //         module={module}
  //         product={product}
  //         activeVariant={product.variants.find((v) => v.id == activeVariantID)}
  //         onVariantChange={updateVariant}
  //       />;
  //     })}
  //   </Layout>;
  // }

  return <></>;
}
export default Page;
