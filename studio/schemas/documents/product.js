export default {
  title: "Produkt",
  name: "product",
  type: "document",
  groups: [
    { name: "seo", title: "Søkemotoroptimalisering" },
    {
      name: "upsells",
      title: "Upsells",
    },
  ],
  fields: [
    {
      title: "Produkttittel",
      name: "productTitle",
      type: "string",
      description:
        "Hvis du ønsker å bruke en annen produkttittel enn den fra Shopify, kan du overstyre den ved å skrive noe inn i dette feltet. Hvis ikke, la den stå tom",
    },
    {
      title: "Produktbeskrivelse",
      name: "productDescription",
      type: "richText",
      description:
        "Gi en god beskrivelse av fordelene og egenskapene med produktet her",
    },
    { title: "Moduler", name: "modules", type: "array", of: [{ type: "faq" }] },
  ],
};
