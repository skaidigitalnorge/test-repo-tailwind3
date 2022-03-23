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
