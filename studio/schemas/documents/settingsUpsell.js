export default {
  title: "Upsell settings",
  name: "settingsUpsell",
  type: "document",
  fields: [
    {
      title: "Relevante produkter",
      name: "relevantProducts",
      type: "array",
      description:
        "Her velger du hvilke produkter du ønsker å vise under produktene på produktsiden. Du kan overskride hva du setter her inne på enkeltprodukter",
      of: [
        {
          type: "reference",
          options: {
            disableNew: true,
          },
          to: [{ type: "product" }, { type: "productVariant" }],
        },
      ],
      validation: (Rule) =>
        Rule.required().error("Du må velge noen produkter å ha her"),
    },

    {
      title: "Upsell i handlekurv-fanen",
      name: "upsellsCartDrawer",
      type: "array",
      description:
        "Her velger du hvilke produkter som kunden blir tilbudt når handlekurven vises etter at de legger til noe i handlekurven. Velg opptil 4 produkter.",
      of: [
        {
          type: "reference",
          options: {
            disableNew: true,
          },
          to: [{ type: "product" }, { type: "productVariant" }],
        },
      ],
      validation: (Rule) =>
        Rule.required().error("Du må velge noen produkter å ha her"),
    },

    {
      title: "Upsell på handlekurv-siden",
      name: "upsellsCartPage",
      type: "reference",
      description:
        "Her velger du hvilket produkt som kunden blir vist når de drar til handlekurvsiden. Velg 1 produkt",
      options: {
        disableNew: true,
      },
      to: [{ type: "product" }, { type: "productVariant" }],
      validation: (Rule) =>
        Rule.required().error("Du må velge noen produkter å ha her"),
    },
  ],
};
