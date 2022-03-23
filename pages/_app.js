import { DefaultSeo } from "next-seo";
import Head from "next/head"
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import SEO from "../next-seo.config";
import { SiteContextProvider } from "../lib/context";

import "../styles/index.css";
import "../styles/helper.css";
import "../styles/embla.css";
import { CartDrawer } from "../components/cart-drawer";

const Site = ({ Component, pageProps, router }) => {
  const togglePageTransition = useTogglePageTransition();
  const { isPageTransition } = useSiteContext();

  const { data } = pageProps;

  // Handle scroll position on history change
  useScrollRestoration(router, pageTransitionSpeed);

  // Trigger our loading class
  useEffect(() => {
    if (isBrowser) {
      document.documentElement.classList.toggle("is-loading", isPageTransition);
    }
  }, [isPageTransition]);

  // Setup page transition loading states
  useEffect(() => {
    Router.events.on("routeChangeStart", (_, { shallow }) => {
      // Bail if we're just changing URL parameters
      if (shallow) return;

      // Otherwise, start loading
      togglePageTransition(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setTimeout(() => togglePageTransition(false), pageTransitionSpeed);
    });

    Router.events.on("routeChangeError", () => {
      togglePageTransition(false);
    });
  }, []);

  // intelligently add focus states if keyboard is used
  const handleFirstTab = (event) => {
    if (event.keyCode === 9) {
      if (isBrowser) {
        document.body.classList.add("is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleFirstTab);
    return () => {
      window.removeEventListener("keydown", handleFirstTab);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      {isPageTransition && (
        <Head>
          <title>Loading...</title>
        </Head>
      )}
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          document.body.classList.remove("overflow-hidden");
        }}
      >
        <Component key={router.asPath.split("?")[0]} {...pageProps} />
      </AnimatePresence>

      <CartDrawer data={{ ...data?.site }} />
    </LazyMotion>
  );
};

function MyApp({ Component, pageProps }) {
  const { data } = pageProps;

  return (
    <>
      <DefaultSeo {...SEO} />
      <SiteContextProvider data={{ ...data?.site }}> 
        <Site Component={Component} pageProps={pageProps} router={router} />
        {/* <Component {...pageProps} /> */}
      </SiteContextProvider>
    </>
  );
}

export default MyApp;
