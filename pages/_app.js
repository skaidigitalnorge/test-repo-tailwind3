import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { SiteContextProvider } from "../lib/context";
import Script from "next/script";

import "../styles/index.css";
import "../styles/helper.css";
import "../styles/embla.css";
import { ViewportProvider } from "../components/hooks/ViewportProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTMHERE');
                 `,
        }}
      />
      <SiteContextProvider>
        <ViewportProvider>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ViewportProvider>
      </SiteContextProvider>
    </>
  );
}

export default MyApp;

// const Site = ({ Component, pageProps, router }) => {
//   const togglePageTransition = useTogglePageTransition();
//   const { isPageTransition } = useSiteContext();

//   const { data } = pageProps;

//   // Handle scroll position on history change
//   useScrollRestoration(router, pageTransitionSpeed);

//   // Trigger our loading class
//   useEffect(() => {
//     if (isBrowser) {
//       document.documentElement.classList.toggle("is-loading", isPageTransition);
//     }
//   }, [isPageTransition]);

//   // Setup page transition loading states
//   useEffect(() => {
//     Router.events.on("routeChangeStart", (_, { shallow }) => {
//       // Bail if we're just changing URL parameters
//       if (shallow) return;

//       // Otherwise, start loading
//       togglePageTransition(true);
//     });

//     Router.events.on("routeChangeComplete", () => {
//       setTimeout(() => togglePageTransition(false), pageTransitionSpeed);
//     });

//     Router.events.on("routeChangeError", () => {
//       togglePageTransition(false);
//     });
//   }, []);

//   // intelligently add focus states if keyboard is used
//   const handleFirstTab = (event) => {
//     if (event.keyCode === 9) {
//       if (isBrowser) {
//         document.body.classList.add("is-tabbing");
//         window.removeEventListener("keydown", handleFirstTab);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleFirstTab);
//     return () => {
//       window.removeEventListener("keydown", handleFirstTab);
//     };
//   }, []);

//   return (
//     <LazyMotion features={domAnimation}>
//       {isPageTransition && (
//         <Head>
//           <title>Loading...</title>
//         </Head>
//       )}
//       <AnimatePresence
//         exitBeforeEnter
//         onExitComplete={() => {
//           document.body.classList.remove("overflow-hidden");
//         }}
//       >
//         <Component key={router.asPath.split("?")[0]} {...pageProps} />
//       </AnimatePresence>

//       <CartDrawer data={{ ...data?.site }} />
//     </LazyMotion>
//   );
// };

// function MyApp({ Component, pageProps }) {
//   const { data } = pageProps;

//   return (
//     <>
//       <DefaultSeo {...SEO} />
//       <SiteContextProvider data={{ ...data?.site }}>
//         <Site Component={Component} pageProps={pageProps} router={router} />
//         {/* <Component {...pageProps} /> */}
//       </SiteContextProvider>
//     </>
//   );
// }

// export default MyApp;
