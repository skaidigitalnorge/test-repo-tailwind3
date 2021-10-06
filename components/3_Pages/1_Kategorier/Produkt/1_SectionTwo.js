import Image from "next/image";
import { FourFourSix, GridItem } from "../../../1_Small/Base";

export const SectionTwo = ({ etProdukt }) => {
  console.log(etProdukt);
  const formattedPrice = etProdukt.price.replace("kr&nbsp;", "");
  const utBilder = etProdukt.variations.nodes.map((aVariation) => {
    console.log(aVariation);
    return (
      <Image
        className="border-rund"
        src={aVariation.image.sourceUrl}
        alt={aVariation.image.altText}
        width={aVariation.image.mediaDetails.width}
        height={aVariation.image.mediaDetails.height}
      />
    );
  });
  return (
    <>
      <GridItem c="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-8 border-2">
        <div className="flex justify-between">
          <h3>{etProdukt.name}</h3>
          <h3>kr {formattedPrice}</h3>
        </div>
        {utBilder}
        {/* Seksjon farger */}
        {/* Seksjon størrelser */}
        {/* Add to cart */}
        {/* Beskrivelse> */}
      </GridItem>
    </>
  );
};
