import BlockContent from "@sanity/block-content-to-react";

import { BlockSerializer } from "./block-serializer";

export const ContentRenderer = ({ blocks }) => {
  if (!blocks) return null;

  return (
    <BlockContent
      renderContainerOnSingleChild // Used when you only have on child, not an array
      blocks={blocks}
      {...getClient().config()}
      serializers={BlockSerializer}
      imageOptions={{
        width: 500,
        height: 500,
      }}
    />
  );
};
