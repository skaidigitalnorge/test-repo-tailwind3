export default {
  title: "Produkt",
  name: "product",
  type: "document",
  groups: [
    { name: "content", title: "Innhold", default: true },
    {
      name: "upsells",
      title: "Upsells",
    },
    { name: "modules", title: "Moduler" },
    { name: "mersalg", title: "Mersalg" },
    { name: "seo", title: "SEO" },
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
      group: "content",
    },
    {
      title: "Tilgjengelig?",
      name: "productAvailability",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },

    {
      title: "Alternativ tittel",
      name: "replacementTitle",
      type: "string",
      description:
        "Hvis du ønsker å bruke en annen produkttittel enn den fra Shopify, kan du overstyre den ved å skrive noe inn i dette feltet. Hvis ikke, la den stå tom",
      group: "content",
    },
    {
      title: "Produktbeskrivelse",
      name: "productDescription",
      type: "richText",
      description:
        "Gi en god beskrivelse av fordelene og egenskapene med produktet her",
      group: "content",
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
      group: "content",
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
      title: "Mersalgkolleksjon",
      name: "upsellCollection",
      type: "reference",
      description:
        "Velg hvilken mersalgskolleksjon du ønsker å vise når du legger til dette produktet i handlekurven",
      to: [{ type: "upsellCollection" }],
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
      group: "modules",
    },
    {
      title: "Søkemotoroptimalisering",
      name: "seo",
      type: "metaInfo",
      group: "seo",
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
