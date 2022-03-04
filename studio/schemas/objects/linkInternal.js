import { Icon } from "../../icon";
import React from "react";
export default {
  title: "Internlenke",
  name: "internalLink",
  type: "reference",
  icon: () => <Icon name="linkInternal" />,
  to: [{ type: "page" }],
};
