import { NextSeo } from "next-seo";
import { Grid, Layout } from "../components/utils/base";
import { SchemaOrganization } from "../components/schema/schema-organization";

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
        <Grid>jeg jeg jeg </Grid>
      </Layout>
    </>
  );
}
