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
