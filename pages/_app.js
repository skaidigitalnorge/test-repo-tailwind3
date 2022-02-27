import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/index.css";
import "../styles/helper.css";
import "../styles/embla.css";
import { SiteContextProvider } from "../lib/context";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const { data } = pageProps;

  return (
    <>
      {/* <SiteContextProvider data={{...data?.site}}> */}
      <DefaultSeo {...SEO} />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        // onExitComplete={() => window.scrollToTop(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      {/* </SiteContextProvider> */}
    </>
  );
}

export default MyApp;
