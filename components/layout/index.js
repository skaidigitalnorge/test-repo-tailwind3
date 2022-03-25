import { m } from "framer-motion";
import { useEffect, useState } from "react";
import Script from "next/script";

import { pageTransitionSpeed } from "../../lib/animate";
import { Footer } from "../footer";
import Navbar from "../navbar";
import Header from "../header";
import { isBrowser, isMobileSafari, useWindowSize } from "../../lib/helpers";
import USP from "../USP";
import HeadConfig from "../head-config/head-config";
import { CookieConsent } from "../cookie-consent";

// Variables for page transition
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: pageTransitionSpeed / 1000,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};
// TODO
// Adde schema
// Adde faktisk data

export const Layout = ({ site = {}, page = {}, schema, children }) => {
  // set window height var (w/ safari/iOS hack)
  const { height: windowHeight } = useWindowSize();
  const [lockHeight, setLockHeight] = useState(false);
  const hasChin = isMobileSafari();

  // set header height
  const [headerHeight, setHeaderHeight] = useState(null);

  useEffect(() => {
    if (isBrowser && !lockHeight) {
      document.body.style.setProperty("--vh", `${windowHeight * 0.01}px`);
      setLockHeight(hasChin);
    }
  }, [windowHeight, hasChin, lockHeight]);

  return (
    <>
      <HeadConfig site={site} page={page} schema={schema} />
      {/* ! GTM bor i _app for now */}
      {/* {site.gtmID && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','${site.gtmID}');
                 `,
          }}
        />
      )} */}
      <m.div
        initial="initial"
        animate="enter"
        exit="exit"
        // variants={variants}
        // style={headerHeight ? { "--headerHeight": `${headerHeight}px` } : null}
      >
        <CookieConsent data={site?.cookieConsent} />
        {site.infoBanner?.isShown && <Header data={site.infoBanner} />}
        <Navbar data={site.navbar} />
        <main id="content">{children}</main>
        <USP />
        <Footer data={site.footer} />
      </m.div>
    </>
  );
};
