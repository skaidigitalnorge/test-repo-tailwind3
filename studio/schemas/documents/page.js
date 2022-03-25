import { MdWeb } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { BsFillFileTextFill } from "react-icons/bs";

export default {
  title: "Page",
  name: "page",
  type: "document",
  icon: MdWeb,
  groups: [
    { name: "base", title: "Info", default: true, icon: AiOutlineFileText },
    { name: "modules", title: "Moduler", icon: BsGrid1X2 },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    // {
    //   name: "blockLayout",
    //   title: "Block Layout",
    //   type: "visualOptions",
    //   options: {
    //     showTooltip: true,
    //     optionSize: "small",
    //     list: {
    //       left: {
    //         name: "Text Left / Image Right",
    //         icon: BsFillFileTextFill,
    //         default: true,
    //       },
    //       right: {
    //         name: "Text Right / Image Left",
    //         icon: BsFillFileTextFill,
    //       },
    //       top: {
    //         name: "Text Top / Image Bottom",
    //         icon: BsFillFileTextFill,
    //       },
    //       bottom: {
    //         name: "Text Botom / Image Top",
    //         icon: BsFillFileTextFill,
    //       },
    //       notext: {
    //         name: "Image, No Text",
    //         icon: BsFillFileTextFill,
    //       },
    //       noimage: {
    //         name: "Text, No Image",
    //         icon: BsFillFileTextFill,
    //       },
    //     },
    //   },
    // },
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
      validation: (Rule) => Rule.required(""),
    },
    {
      title: "Nettstedsadresse",
      name: "slug",
      type: "slug",
      description: "Vises typisk i Google-søk og øverst i nettleservinduet",
      options: {
        //Change to schema title to automatically populate
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (Rule) => Rule.required(),
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
      name: "modules",
      type: "array",
      description:
        "Her legger du inn innholdet til siden ved å legge til moduler. Trykk '+ Add item…' for å se hva du kan legge til",
      of: [
        { type: "pageHero", title: "Hero" },
        { type: "faq", title: "Ofte stilte spørsmål" },
        { type: "sectionTitle", title: "Overskrift" },
      ],
      group: "modules",
      options: {
        editModal: "popover",
      },
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
