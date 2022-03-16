export default {
  title: "Lenke",
  name: "linkList",
  type: "object",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      description: "Description",
    },
    {
      title: "Nedtrekksgjenstander",
      name: "dropdownItems",
      type: "array",
      of: [{ type: "linkExternal" }],
      description: "Description",
    },
  ],
};
