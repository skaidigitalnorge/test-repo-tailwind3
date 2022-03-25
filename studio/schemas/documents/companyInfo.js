export default {
  title: "Info om selskapet",
  name: "companyInfo",
  type: "document",
  fieldsets: [
    {
      title: "Besøksadresse",
      name: "addressInfo",
      description:
        "Har du en besøksadresse, fyll inn informasjonen her. Hvis ikke, la feltene stå tomme.",
      options: { columns: 2, collapsible: true },
    },
  ],
  fields: [
    // Base info
    //
    {
      title: "Navn på selskapet",
      name: "name",
      type: "string",
    },
    {
      title: "Logo",
      name: "companyLogo",
      type: "richImage",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: "Telefonnummer",
      name: "phoneNumber",
      type: "string",
      description:
        "Hvis du har et telefonnummer som kunder kan nå deg på, skriv det her. Hvis ikke, la det stå tomt.",
    },

    // Address info
    //
    {
      title: "Gateadresse",
      name: "streetAddress",
      type: "string",
      fieldset: "addressInfo",
      description: "For eksempel: Nordal Bruns Gate 22",
    },
    {
      title: "Postnummer",
      name: "postalCode",
      type: "string",
      fieldset: "addressInfo",
      description: "For eksempel: 0272",
    },
    {
      title: "Sted / By",
      name: "region",
      type: "string",
      fieldset: "addressInfo",
      description: "For eksempel: Oslo",
    },
    {
      title: "Land",
      name: "country",
      type: "string",
      fieldset: "addressInfo",
      description: "For eksempel: Norway",
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
