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
    { name: "modules", title: "Moduler" },
  ],
  fieldsets: [
    {
      title: "Shopify",
      name: "shopify",
      description: "Synced from Shopify",
      options: { columns: 2, collapsible: true },
    },
  ],
  fields: [
    {
      title: "Product Title",
      name: "productTitle",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      title: "Produkttittel",
      name: "replacementTitle",
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
    {
      title: "Moduler",
      name: "modules",
      type: "array",
      group: "modules",
      of: [{ type: "faq" }],
    },
  ],
};
