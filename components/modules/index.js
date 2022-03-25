<<<<<<< HEAD
import dynamic from "next/dynamic";

const PageHero = dynamic(() => import("./page-hero"));
const ProductHero = dynamic(() => import("./product-hero"));

export const Module = ({
  index,
  module,
  product,
  activeVariant,
  onVariantChange,
}) => {
  const type = module._type;

  switch (type) {
    case "pageHero":
      return <PageHero index={index} data={module} />;
    case "productHero":
      return (
        <ProductHero
          index={index}
          product={product}
          activeVariant={activeVariant}
          onVariantChange={onVariantChange}
        />
      );

    default:
      return null;
  }
};
=======
// import dynamic from "next/dynamic";
// import LeadMagnet from "./lead-magnet";

// const Hero = dynamic(() => import("./hero"));
// const Testimonial = dynamic(() => import("./testimonial"));
// const TextBlock = dynamic(() => import("./text-block"));
// const CTA = dynamic(() => import("./cta"));

// export const Module = ({ index, module }) => {
//   const type = module._type;

//   switch (type) {
//     case "hero":
//       return <Hero index={index} data={module} />;
//     case "testimonial":
//       return <Testimonial index={index} data={module} />;
//     case "landingPageBody":
//       return <TextBlock index={index} data={module} />;
//     case "cta":
//       return <CTA index={index} data={module} />;
//     case "leadMagnet":
//       return <LeadMagnet index={index} data={module} />;
//     default:
//       return null;
//   }
// };
>>>>>>> 6d382642d9019e73f0a6e62530904e92e20f24a4
