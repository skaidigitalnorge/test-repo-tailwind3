import { MdWeb } from "react-icons/md";

export default {
  title: "Page",
  name: "page",
  type: "document",
  icon: MdWeb,
  groups: [
    { name: "base", title: "Info", default: true },
    { name: "modules", title: "Moduler" },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      title: "Sidetittel",
      name: "title",
      type: "string",
      description: "Denne brukes bare internt. Den vises ikke på nettsiden",
      group: "base",
    },
    {
      title: "Sidebeskrivelse",
      name: "description",
      type: "text",
      rows: 3,
      description:
        "Skriv en kort beskrivelse av hva siden handler om. Denne teksten blir blant annet vist hvis denne siden dukker opp i et Google-søk",
      group: "base",
    },
    {
      title: "Nettstedsadresse",
      name: "slug",
      type: "slug",
      description: "Vises typisk i Google-søk og øverst i nettleservinduet",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "base",
    },
    {
      title: "Bilde",
      name: "image",
      type: "richImage",
      description:
        'Velg et bilde som representerer denne siden. Hvis denne siden f.eks. deles på Facebook, så er det dette bildet som vises. Hvis du ikke laster opp et bilde, så brukes standardbildet som er blitt satt i innstillingene"',
      group: "base",
    },
    {
      title: "Skal siden vises på Google?",
      name: "shouldIndex",
      type: "boolean",
      description:
        "Skru denne av hvis dette er en side du ikke ønsker skal dukke opp på Google",
      initialValue: true,
      group: "base",
    },

    {
      title: "Moduler",
      name: "faq",
      type: "array",
      description:
        "Her legger du inn innholdet til siden ved å legge til moduler. Trykk '+ Add item…' for å se hva du kan legge til",
      of: [{ type: "faq" }, { type: "sectionTitle" }],
      group: "modules",
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
        subtitle: `/${subtitle}`,
      };
    },
  },
};
