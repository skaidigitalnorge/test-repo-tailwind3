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
    { name: "mersalg", title: "Mersalg" },
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
      title: "Produktnavn",
      name: "productTitle",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      title: "Tilgjengelig?",
      name: "productAvailability",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },

    {
      title: "Alternativ tittel",
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
      title: "Produktbilder",
      name: "imagesProduct",
      type: "array",
      description:
        "Bilder du laster opp her, vil vises på alle variantene. Du kan overskride dem ved å legge til bilder under 'produktvarianter'",
      of: [{ type: "richImage" }],
      options: {
        layout: "grid",
      },
    },
    {
      title: "Anbefalte produkter",
      name: "reccommendedProducts",
      type: "array",
      description:
        "Her velger du hvilke produkter som blir vist under 'Anbefalte produkter'",
      of: [{ type: "product" }],
      options: {
        layout: "grid",
      },
      group: "mersalg",
    },
    {
      title: "Moduler",
      name: "modules",
      type: "array",
      group: "modules",
      description:
        "Her kan du legge til ekstra innhold til produktet. Det kan være ofte stilte spørsmål, osv.",
      of: [{ type: "faq" }],
    },
  ],
  preview: {
    select: {
      title: "productTitle",
      subtitle: "parentProduct.productTitle",
      media: "imagesProduct.0.image",
    },
  },
};
