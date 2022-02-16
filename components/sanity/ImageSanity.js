import Image from "next/image";
import sanityClient from "../lib/sanityClient";
import { useNextSanityImage } from "next-sanity-image";

export const ImageSanity = ({ imagePath, alt, sizes, className, layout }) => {
  const imageProps = useNextSanityImage(sanityClient, imagePath);

  return (
    <Image
      {...imageProps}
      alt={alt}
      sizes={sizes}
      className={className}
      layout={layout}
    />
  );
};
