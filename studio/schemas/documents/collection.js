import { BsFillCollectionFill, BsGrid1X2 } from "react-icons/bs";
import { AiOutlineFileText, AiOutlineShoppingCart } from "react-icons/ai";

export default {
  title: "Kolleksjoner",
  name: "collection",
  type: "document",
  groups: [
    {
      name: "products",
      title: "Produkter",
      default: true,
      icon: AiOutlineShoppingCart,
    },
    { name: "content", title: "Innhold", icon: AiOutlineFileText },
    { name: "modules", title: "Moduler", icon: BsGrid1X2 },
  ],
  fields: [
    {
      title: "Kolleksjon",
      name: "title",
      type: "string",
      description: "Skriv navnet på kolleksjonen her",
      group: "content",
      validation: (Rule) =>
        Rule.required().error("Du må huske å gi kolleksjonen et navn"),
    },
    {
      title: "Nettstedsadresse",
      name: "slug",
      type: "slug",
      group: "content",
      description:
        "Dette er hva kolleksjonen vil hete oppe i nettleservinduet. For eksempel: sommer-kolleksjon. Skriv det i samme format med bindestrek mellom hvert ord.",
      validation: (Rule) => Rule.required().error("Du må huske å sette denne."),
    },
    {
      title: "Overskrift",
      name: "headline",
      type: "string",
      description:
        "Dette er overskriften som vises øverst inne på denne collection. Den må fylles ut.",
      group: "content",
      validation: (Rule) =>
        Rule.required().error(
          "Husk å sette overskriften til denne kolleksjonen. Det er denne teksten som vises inne på siden"
        ),
    },

    {
      title: "Bakgrunnsbilde",
      name: "image",
      type: "richImage",
      description:
        "Her kan du laste opp et bakgrunnsbilde bak overskriften hvis du ønsker. Hvis du ikke gjør det, blir det vist en bakgrunnsfarge i stedet.",
      group: "content",
    },

    {
      title: "Moduler",
      name: "modules",
      type: "array",
      of: [{ type: "collectionGrid" }],
      initialValue: [{ _type: "collectionGrid" }],
      group: "modules",
    },

    {
      title: "Produkter",
      name: "collectionProducts",
      type: "array",
      description:
        "Legg inn produktene du ønsker å ha med i denne kolleksjonen her",
      of: [
        {
          type: "reference",
          options: {
            disableNew: true,
          },
          to: [{ type: "product" }, { type: "productVariant" }],
        },
      ],
      group: "products",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `/collections/${subtitle}` : "Ikke satt slug enda",
        media: BsFillCollectionFill,
      };
    },
  },
};
