import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { kategori_query } from "../components/1_Small/wp-queries";
import client from "../apollo-client";
import { FourFourFour, Grid, Layout } from "../components/1_Small/Base";
import Image from "next/image";

export async function getStaticProps() {
  const { data } = await client.query({ query: kategori_query });
  return {
    props: {
      produkt: data.productCategories.nodes,
    },
    revalidate: 60,
  };
}

export default function Home({ produkt }) {
  const KategoriSpørring = () => {
    // console.log(produkt);
    return produkt.map((kategori) => {
      if (kategori.name == "Uncategorized") {
        return null;
      }
      return (
        <FourFourFour>
          <Image
            // className={c}
            src={kategori.image.sourceUrl}
            alt={kategori.image.altText}
            width={kategori.image.mediaDetails.width}
            height={kategori.image.mediaDetails.height}
            // layout={layout}
          />
          <p>{kategori.name}</p>
        </FourFourFour>
      );
    });
  };

  return (
    <>
      <Navbar />
      <Layout>
        <h2>Hva ser du etter?</h2>
        <Grid>
          <KategoriSpørring produkt={produkt} />
        </Grid>
      </Layout>
      <Footer />
    </>
  );
}
