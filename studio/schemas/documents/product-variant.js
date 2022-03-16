export default {
  title: "Produktvariant",
  name: "productVariant",
  type: "document",
  fieldsets: [
    {
      title: "Shopify",
      name: "shopify",
      description: "Dette er info om produktet hentet fra Shopify",
      options: { columns: 2, collapsible: true, collapsed: false },
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
    },
    {
      title: "Varepris",
      name: "productVariantPrice",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },

    // Sanity data

    {
      title: "Tittel",
      name: "title",
      type: "string",
      description: "Description",
    },
    {
      title: "Hovedprodukt",
      name: "parentProduct",
      type: "reference",
      to: [{ type: "product" }],
      description: "Hvilket produkt denne varianten tilhører",
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
        "Hvis du ønsker, kan du bytte ut produktbeskrivelsen du har til 'moderproduktet' med en egen for denne varianten. Ønsker du ikke det, så lar du hele feltet stå tomt.",
    },
    {
      title: "Variantbilder",
      name: "imagesVariant",
      type: "array",
      description:
        "Last opp bilder her hvis du ønsker å overskride bildene som kommer fra 'moderproduktet'. Du kan også dra på dem for å endre rekkefølge",
      of: [{ type: "richImage" }],
      options: {
        layout: "grid",
      },
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
