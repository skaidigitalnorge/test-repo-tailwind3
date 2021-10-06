import Image from "next/image";
import { Grid, Layout, Section160, FourFourFour } from "../../1_Small/Base";

export const KategoriSpørring = ({ kategori }) => {
  const utKategorier = kategori.map((produkt) => {
    if (produkt.name == "Uncategorized") {
      return null;
    }
    return (
      <FourFourFour key={produkt.id}>
        <Image
          // className={c}
          src={produkt.image.sourceUrl}
          alt={produkt.image.altText}
          width={produkt.image.mediaDetails.width}
          height={produkt.image.mediaDetails.height}
          // layout={layout}
        />
        <p>{produkt.name}</p>
      </FourFourFour>
    );
  });
  return (
    <Section160>
      <Layout>
        <h2>Hva ser du etter?</h2>
        <Grid>{utKategorier}</Grid>
      </Layout>
    </Section160>
  );
};
