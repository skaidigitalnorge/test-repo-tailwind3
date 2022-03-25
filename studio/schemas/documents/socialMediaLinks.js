export default {
  title: "Sosiale medier",
  name: "socialMediaLinks",
  type: "document",
  fields: [
    {
      title: "Sosiale medier",
      name: "socialMediaLinks",
      type: "array",
      description:
        "Her kan du legge inn alle sosiale mediene hvor du har en bruker du ønsker å dele",
      of: [{ type: "socialMedia" }],
      options: {
        editModal: "popover",
      },
    },
  ],
};
