import Image from "next/image";
import { FourFourSix } from "../../../1_Small/Base";

export const MainPicture = ({ etProdukt }) => {
  console.log(etProdukt);
  return (
    <>
      <FourFourSix>
        <Image
          className="border-rund"
          src={etProdukt.image.sourceUrl}
          alt={etProdukt.image.altText}
          width={etProdukt.image.mediaDetails.width}
          height={etProdukt.image.mediaDetails.height}
          // layout={layout}
        />
        {/* Her kommer supplerende bilder */}
      </FourFourSix>
    </>
  );
};
