import { useRouter } from "next/router";
import client from "../../apollo-client";
import { Layout, Section160 } from "../../components/1_Small/Base";
import {
  slug_path_query,
  et_produkt_query,
  et_produkt_query2,
} from "../../components/1_Small/wp-queries";
import { Footer } from "../../components/2_Big/Navigation/Footer";
import { Navbar } from "../../components/2_Big/Navigation/Navbar";
import { Product } from "../../components/3_Pages/1_Kategorier/Produkt/index";

function RedirectPage() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/404");
  }
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: slug_path_query });
  return {
    paths: data.products.nodes.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: et_produkt_query2(params.slug),
  });
  return {
    props: {
      produkt: data.products.nodes[0],
    },
    revalidate: 60,
  };
}

export default function etProdukt({ produkt }) {
  if (!produkt) {
    return <div>{RedirectPage()}</div>;
  }

  return (
    <>
      <Navbar />
      <Layout>
        <Section160>
          <Product produkt={produkt} />
        </Section160>
      </Layout>
      <Footer />
    </>
  );
}
