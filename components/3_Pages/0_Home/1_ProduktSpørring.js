import Image from "next/image";
import Link from "next/link";
import { Grid, Layout, Section160, FourFourFour } from "../../1_Small/Base";

export const ProduktSpørring = ({ produkt }) => {
  const utKategorier = produkt.map((etProdukt) => {
    console.log(etProdukt);
    const formattedPrice = etProdukt.price.replace("kr&nbsp;", "");
    return (
      <FourFourFour key={etProdukt.id}>
        <Link href={`produkt/${etProdukt.slug}`}>
          <a>
            <Image
              // className={c}
              src={etProdukt.image.sourceUrl}
              alt={etProdukt.image.altText}
              width={etProdukt.image.mediaDetails.width}
              height={etProdukt.image.mediaDetails.height}
              // layout={layout}
            />
            <p>{etProdukt.name}</p>
            <div>kr {formattedPrice}</div>
          </a>
        </Link>
      </FourFourFour>
    );
  });
  return (
    <Section160>
      <Layout>
        <h3>Populære Produkter:</h3>
        <Grid>{utKategorier}</Grid>
      </Layout>
    </Section160>
  );
};
