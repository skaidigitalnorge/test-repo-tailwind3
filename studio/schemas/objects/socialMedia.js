import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const getIcon = (icon) => {
  switch (icon) {
    case "facebook":
      return FaFacebookF;
    case "instagram":
      return FaInstagram;
    case "twitter":
      return FaTwitter;
    case "tiktok":
      return FaTiktok;
    case "pinterest":
      return FaPinterestP;
    default:
      return false;
  }
};

export default {
  title: "Sosiale medier",
  name: "socialMedia",
  type: "object",
  fields: [
    {
      title: "Hvilken sosiale medier?",
      name: "socialMedia",
      type: "string",
      description:
        "Velg hvilken plattform du har en bruker i med denne nedtrekkslista",
      options: {
        list: [
          { title: "Twitter", value: "twitter" },
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "TikTok", value: "tikTok" },
          { title: "Pinterest", value: "pinterest" },
        ],
      },
    },
    {
      title: "Lenke",
      name: "url",
      type: "url",
      description: "Lim inn lenken til din profil her",
    },
  ],
  preview: {
    select: {
      title: "socialMedia",
      subtitle: "url",
    },
    prepare({ title, subtitle }) {
      return {
        title: title.charAt(0).toUpperCase() + title.substring(1),
        subtitle: subtitle ? subtitle : "Ikke lagt inn lenke",
        media: getIcon(title),
      };
    },
  },
};
