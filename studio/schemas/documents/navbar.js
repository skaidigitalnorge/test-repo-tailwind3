import { GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";

export default {
  title: "Toppnavigasjon",
  name: "navbar",
  type: "document",
  groups: [
    {
      title: "Datamaskin",
      name: "desktop",
      default: true,
      icon: GoDeviceDesktop,
    },
    { title: "Mobil", name: "mobile", icon: GoDeviceMobile },
  ],
  fields: [
    {
      title: "Innhold",
      name: "contentDesktop",
      type: "array",
      description:
        "Her velger du hvilke sider du ønsker å linke til eller ha en nedtrekksliste til",
      of: [
        { type: "navPage", title: "Lenke" },
        { type: "navDropdown", title: "Nedtrekksliste" },
      ],
      group: "desktop",
      options: {
        editModal: "popover",
      },
    },
    {
      title: "Innhold",
      name: "contentMobile",
      type: "array",
      description:
        "Her velger du hvilke sider du ønsker å linke til eller ha en nedtrekksliste til",
      of: [
        { type: "navPage", title: "Lenke" },
        { type: "navDropdown", title: "Nedtrekksliste" },
      ],
      group: "mobile",
      options: {
        editModal: "popover",
      },
    },
  ],
};
