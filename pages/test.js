import { EmblaCarousel } from "../components/embla-carousel";
import {
  FourEightEight,
  Grid,
  FourEightTwelve,
  Container,
} from "../components/utils/base";
import Link from "next/link";

function Test() {
  //   const SLIDE_COUNT = 5;
  //   const slides = Array.from(Array(SLIDE_COUNT).keys());

  const slides = [
    {
      src: "/media-1.jpeg",
      alt: "alt text",
    },
    {
      src: "/media-2.jpeg",
      alt: "alt text",
    },
    {
      src: "/media-3.jpeg",
      alt: "alt text",
    },
    {
      src: "/media-4.jpeg",
      alt: "alt text",
    },
    {
      src: "/media-5.jpeg",
      alt: "alt text",
    },
  ];

  return (
    <>
      <Container>
        <Grid>
          <FourEightEight>
            <EmblaCarousel slides={slides} />
          </FourEightEight>
          <FourEightTwelve>
            <Link href="/">
              <a className="bg-black text-white px-24 py-16 flex">
                Denne knappen tar deg til home page
              </a>
            </Link>
          </FourEightTwelve>
        </Grid>
      </Container>
    </>
  );
}
export default Test;
