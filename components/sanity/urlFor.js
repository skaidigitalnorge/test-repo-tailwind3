import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanityClient";

export function urlFor(source) {
  return imageUrlBuilder(sanityClient).image(source);
}
