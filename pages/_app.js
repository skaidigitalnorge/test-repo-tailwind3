import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/index.css";
import "../styles/helper.css";
import { SiteContextProvider } from "../lib/context";

function MyApp({ Component, pageProps }) {
  const { data } = pageProps;

  return (
    <>
      {/* <SiteContextProvider data={{...data?.site}}> */}
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      {/* </SiteContextProvider> */}
    </>
  );
}

export default MyApp;
