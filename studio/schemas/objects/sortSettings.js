import { SortAscending } from "phosphor-react";

export const sortTypes = [
  { title: "Featured", value: "featured" },
  { title: "Newest", value: "dateDesc" },
  { title: "Oldest", value: "dateAsc" },
  { title: "Price: High to Low", value: "priceDesc" },
  { title: "Price: Low to High", value: "priceAsc" },
  { title: "Alpha: A – Z", value: "alphaAsc" },
  { title: "Alpha: Z – A", value: "alphaDesc" },
];

export default {
  title: "Sortering",
  name: "sortSettings",
  type: "object",
  description:
    "Velg hvilke sorteringsvalg som er tilgjengelige på kategorisien",
  fields: [
    {
      title: "Skru på sortering?",
      name: "isActive",
      type: "boolean",
      initialValue: true,
    },
    {
      title: "Sort Options",
      name: "options",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          title: "Option",
          name: "option",
          type: "object",
          icon: SortAscending,
          fields: [
            {
              title: "Type",
              name: "type",
              type: "string",
              options: {
                list: sortTypes,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Custom Title",
              name: "title",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "title",
              type: "type",
            },
            prepare({ title, type }) {
              const sortTitle = sortTypes.find((t) => t.value === type).title;

              return {
                title: title || sortTitle,
                subtitle: title ? sortTitle : "",
              };
            },
          },
        },
      ],
    },
  ],
};
