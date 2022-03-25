import Head from "next/head";

const HeadConfig = ({ site = {}, page = {}, schema }) => {
  //   const siteTitle = site.title
  // const siteFavicon = site.seo?.favicon || '/favicon.svg'
  // const siteFaviconLegacy = site.seo?.faviconLegacy || '/favicon.ico'
  // const siteTouchIcon = site.seo?.touchIcon

  // TODO Lag ternary her som sjekker om man har title til page. Hvis ja, bruk, hvis nei, hente title fra site. Samme med meta description
  // ? Tror jeg er big brain med at openGraph kan være det samme som meta title. Er det noe problem med det, siden ingen andre gjør det? Altså at de har separate felt. Tenk på det.
  const siteTitle = "";
  const metaTitle = "";
  const metaDesc = "";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />

      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} />
      <meta name="twitter:title" content={metaTitle} />
      {metaDesc && (
        <>
          <meta name="description" content={metaDesc} />
          <meta property="og:description" content={metaDesc} />
          <meta name="twitter:description" content={metaDesc} />
        </>
      )}

      {siteTitle && <meta property="og:site_name" content={siteTitle} />}

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

export default HeadConfig;
