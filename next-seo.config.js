// ? Add variable that you can fill in one place and props down. For example company name

export default {
  title: undefined,
  // TODO Change the "Skai Digital" part with the company name
  titleTemplate: "%s - Skai Digital",
  // TODO Change the string into <business area> in <city>
  defaultTitle: "Digitalbyrå i Oslo",
  // TODO Set meta description that will show when sharing the website/in Google
  description:
    "Din webutvikling og search engine optimization (SEO) partner i Oslo",
  openGraph: {
    type: "website",
    // TODO Change this if the language of the website is english. Then change "nb" to "en"
    locale: "nb",
    // TODO Set the url for the website
    url: "https://www.skaidigital.no/",
    // TODO Replace "Skai Digital" with the company name
    site_name: "Skai Digital",
  },
  twitter: {
    // TODO Fill inn the twitter information, if the company has it. If not, remove line 21:26
    handle: "@skai_digital",
    site: "@skaidigital",
    cardType: "summary_large_image",
  },
};
