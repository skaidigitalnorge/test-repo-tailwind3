import useSWR from "swr";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";

import { getProduct, getAllDocSlugs } from "../../data";
import { Layout } from "../../components/layout";
import { Module } from "../../components/modules/index";

const Product = ({ data }) => {
  const router = useRouter();
  const { site, page } = data;
  const [product, setProduct] = useState(page.product);

  if (!router.isFallback && !data) {
    return <>Her har det skjedd noe</>;
  }

  console.log("page");
  console.log(page);
  console.log("site");
  console.log(site);

  return (
    <>
      <Layout
        site={site}
        // page={page}
        // schema={schema}
      >
        {page.modules?.map((module, key) => (
          <Module
            key={key}
            index={key}
            module={module}
            product={product}
            // activeVariant={product.variants.find(
            //   (v) => v.id == activeVariantID
            // )}
            // onVariantChange={updateVariant}
          />
        ))}
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const allProducts = await getAllDocSlugs("product");

  return {
    paths:
      allProducts?.map((page) => {
        return {
          params: {
            slug: page.slug,
          },
        };
      }) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params, preview, previewData }) {
  const productData = await getProduct(params.slug, {
    active: preview,
    token: previewData?.token,
  });

  return {
    props: {
      data: productData,
    },
  };
}

export default Product;
