import { NextSeo } from "next-seo";
import { FourEightTwelve, Grid, Layout } from "../components/utils/base";
import { SchemaOrganization } from "../components/schema/schema-organization";
import Link from "next/link";

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
      <SchemaOrganization />
      <Layout>
        <Grid>
          Dette er main page content
          <FourEightTwelve>
            <Link href="/test">
              <a className="bg-black text-white px-24 py-16 flex">
                Denne knappen tar deg til test
              </a>
            </Link>
          </FourEightTwelve>
        </Grid>
      </Layout>
    </>
  );
}
