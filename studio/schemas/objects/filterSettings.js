import { Funnel } from "phosphor-react";

export default {
  title: "Filter (admin)",
  name: "filterSettings",
  type: "object",
  description: "Vis et filter på kategorisidene",
  fields: [
    {
      title: "Skru på filtrering?",
      name: "isActive",
      type: "boolean",
      initialValue: true,
    },
    {
      title: "Filter-kategorier",
      name: "groups",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          title: "Group",
          name: "group",
          type: "object",
          icon: Funnel,
          fields: [
            {
              title: "Display",
              name: "display",
              type: "string",
              options: {
                list: [
                  { title: "Default", value: " " },
                  { title: "Button Grid", value: "grid" },
                ],
              },
              initialValue: " ",
            },
            {
              title: "Title",
              name: "title",
              type: "string",
            },
            {
              title: "Slug",
              name: "slug",
              type: "slug",
              description: "required",
              options: {
                source: (_, context) => context.parent.title,
                isUnique: (slug, context) => {
                  const otherGroupSlugs = context.document.filter.groups
                    .filter((g) => g._key !== context.parent._key)
                    .map((g) => g.slug.current);

                  return ![...otherGroupSlugs, "sort"].includes(slug);
                },
                maxLength: 15,
              },
            },
            {
              title: "Associated Filters",
              name: "options",
              type: "array",
              of: [
                {
                  title: "Filter",
                  type: "reference",
                  to: [{ type: "filter" }],
                  options: {
                    filter: ({ document }) => {
                      const addedFilters = document.filter.groups.flatMap((g) =>
                        g.options.map((p) => p._ref).filter(Boolean)
                      );

                      return {
                        filter: "!(_id in $ids)",
                        params: {
                          ids: addedFilters,
                        },
                      };
                    },
                  },
                },
              ],
              validation: (Rule) => Rule.unique(),
            },
          ],
          preview: {
            select: {
              title: "title",
            },
            prepare({ title }) {
              return {
                title: title,
              };
            },
          },
        },
      ],
    },
  ],
};
