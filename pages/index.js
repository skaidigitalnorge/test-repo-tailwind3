import { NextSeo } from "next-seo";
import { FourFourThree, Grid, Layout } from "../components/1_Small/Base";
import {
  PrimaryButton,
  PrimaryButtonHref,
  SecondaryButton,
  SecondaryButtonHref,
} from "../components/1_Small/Buttons";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import Image from "next/image";

export default function Home() {
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
      <Layout></Layout>
      <Footer />
    </>
  );
}
