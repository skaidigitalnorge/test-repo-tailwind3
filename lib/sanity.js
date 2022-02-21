import createSanityClient from "@sanity/client";
import sanityImage from "@sanity/image-url";

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // useCdn: process.env.NODE_ENV === "production",
  useCdn: true,
  apiVersion: "2022-02-21",
};

export const sanityClient = createSanityClient(options);
export const imageBuilder = sanityImage(sanityClient);

export function createPreviewClient(token) {
  return createSanityClient({
    ...options,
    useCdn: false,
    token,
  });
}

export function getSanityClient(preview) {
  if (preview?.active) {
    return createPreviewClient(preview.token);
  } else {
    return sanityClient;
  }
}
