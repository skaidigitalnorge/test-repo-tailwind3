import { NextSeo } from "next-seo";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../components/1_Small/Buttons";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import client from "../apollo-client";
import {
  kategori_query,
  produkt_query,
} from "../components/1_Small/wp-queries";
import { FourFourFour, Grid, Layout } from "../components/1_Small/Base";
import { KategoriSpørring } from "../components/3_Pages/0_Home/0_KategoriSpørring";
import { ProduktSpørring } from "../components/3_Pages/0_Home/1_ProduktSpørring";

export async function getStaticProps() {
  const { data: kategori } = await client.query({ query: kategori_query });
  const { data: produkt } = await client.query({ query: produkt_query });
  return {
    props: {
      kategori: kategori.productCategories.nodes,
      produkt: produkt.products.nodes,
    },
    revalidate: 60,
  };
}

export default function Home({ kategori, produkt }) {
  console.log(produkt);
  return (
    <>
      <NextSeo
        title=""
        description=""
        openGraph={{
          title: "",
          description: "",
          images: [
            {
              url: "",
              width: "",
              height: "",
              alt: "",
            },
          ],
        }}
        twitter={{
          handle: "@skai_digital",
          site: "@skaidigital",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <Layout>
        {"cHJvZHVjdF92YXJpYXRpb246NDM=" == "cHJvZHVjdF92YXJpYXRpb246MzA=" ? (
          <div>De er Like</div>
        ) : (
          <div>de er ULIKE</div>
        )}
        {/* <KategoriSpørring kategori={kategori} /> */}
        {/* <ProduktSpørring produkt={produkt} /> */}
      </Layout>
      <Footer />
    </>
  );
}
