import { NextSeo } from "next-seo";
import { PrimaryButton, SecondaryButton } from "../components/1_Small/Buttons";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";

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
      <div className="rowToColLg border hover">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          This is a paragraph using the p-tag in html! This is used to see how
          the text spans over the page
        </p>
        <div className="w-240 mt-32">
          <PrimaryButton text="Primary button" href="" />
          <SecondaryButton text="Secondary button" href="" />
        </div>
        <a className="">
          This is a paraph using the a-tag (a link). Test how it hovers!
        </a>
      </div>
      <Footer />
    </>
  );
}
