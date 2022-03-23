export default {
  title: "Produktvariant",
  name: "productVariant",
  type: "document",
  groups: [
    { name: "content", title: "Innhold", default: true },
    { name: "modules", title: "Moduler" },
    { name: "mersalg", title: "Mersalg" },
    { name: "seo", title: "Søkemotoroptimalisering" },
  ],
  fieldsets: [
    {
      title: "Info fra Shopify",
      name: "shopify",
      description:
        "Trykk på nedtrekksikonet for å se informasjon om produktet hentet fra Shopify.",
      options: { columns: 2, collapsible: true },
    },
  ],
  fields: [
    // Shopify data
    {
      title: "Produktnavn",
      name: "productTitle",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },
    {
      title: "Produkt-ID",
      name: "productID",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },
    {
      title: "Pris",
      name: "productPrice",
      type: "number",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },
    {
      title: "SKU",
      name: "SKU",
      type: "number",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },
    {
      title: "På lager?",
      name: "inStock",
      type: "boolean",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },
    {
      title: "Få på lager?",
      name: "lowStock",
      type: "boolean",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },
    {
      title: "Nettstedsadresse",
      name: "slug",
      type: "slug",
      readOnly: true,
      fieldset: "shopify",
      group: "content",
    },

    // Parent product
    //
    {
      title: "Foreldreprodukt",
      name: "parentProduct",
      type: "reference",
      to: [{ type: "product" }],
      description: "Dette er produktet som denne varianten stammer fra",
      group: "content",
    },

    // Content
    //
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
      title: "Variantbilder",
      name: "imagesVariant",
      type: "array",
      description:
        "Her kan du laste opp egne bilder for denne varianten. De vil vises på produktsiden. Lar du den stå tom, brukes bildene som ble satt i 'Foreldreproduktet'. Det kan du se lengre opp i denne fanen",
      of: [{ type: "richImage" }],
      options: {
        layout: "grid",
      },
      group: "content",
    },

    // Upsells
    //
    {
      title: "Anbefalte produkter",
      name: "reccommendedProducts",
      type: "array",
      description:
        "Her velger du hvilke produkter som blir vist under 'Anbefalte produkter'. Lar du den stå tom, så brukes produktene som er valgt under Innstillinger->Mersalg",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
          options: {
            disableNew: true,
          },
        },
      ],
      options: {
        layout: "grid",
      },
      group: "mersalg",
    },

    // Modules
    //
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

    // SEO
    //
    {
      title: "Sidetittel",
      name: "metaTitle",
      type: "string",
      description: "",
      group: "seo",
    },
    {
      title: "Sidebeskrivelse",
      name: "metaDescription",
      type: "string",
      description: "",
      group: "seo",
    },
  ],
  preview: {
    select: {
      title: "productTitle",
      subtitle: "parentProduct.productTitle",
      media: "imagesVariant.0.image",
    },
  },
};
