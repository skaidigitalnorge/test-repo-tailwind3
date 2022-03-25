import createSanityClient from "@sanity/client";
import sanityImage from "@sanity/image-url";

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  // token:
  //   "skvAc1RNcYnP5j2e6aX2CtJJ9VKU6IUUxfiZy9hoxDuY3gntfwX5UqmLWOBnucUDRslNLCsvc6hd1FEDJ3pG4aiHoRiV1RwE4r3vFXHuMpmDABTOEOYpYbySSAtQq3S7xlJ53JOaxEmEIk5nTjTZGNs5xjrD0SILEdQ6FP6xmWCD3vkDCn6W",
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
