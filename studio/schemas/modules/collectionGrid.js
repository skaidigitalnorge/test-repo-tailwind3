import { BsFillCollectionFill } from "react-icons/bs";

export default {
  title: "Collection Grid",
  name: "collectionGrid",
  type: "object",
  fields: [
    {
      title: "Vis kolleksjon?",
      name: "active",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Collection Grid",
        subtitle: "Viser produktene som tilhører denne kolleksjonen",
        media: BsFillCollectionFill,
      };
    },
  },
};
