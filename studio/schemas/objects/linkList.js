export default {
  title: "Lenke",
  name: "linkInternalList",
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
      of: [{ type: "linkInternal" }],
      description: "Description",
    },
  ],
};
