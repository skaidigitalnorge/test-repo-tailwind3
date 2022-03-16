export default {
  title: "Info om selskapet",
  name: "companyInfo",
  type: "document",
  fields: [
    {
      title: "Navn på selskapet",
      name: "companyName",
      type: "string",
    },
    {
      title: "Organisasjonsnummer",
      name: "organizationNumber",
      type: "string",
      validation: (Rule) => [
        Rule.regex(/^[0-9 ]*$/, {
          name: "organizationNumber",
          invert: false,
        }).error("Organisasjonsnummer er bare tall med 11 siffer"),
      ],
    },
    {
      title: "E-post til kontaktperson",
      name: "email",
      type: "string",
      description: "Dette er e-posten som vises rundt omkring på nettsiden",
      validation: (Rule) => [
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email",
            invert: false,
          }
        ).error("Det er ikke en gyldig e-postadresse"),
      ],
    },
  ],
};
