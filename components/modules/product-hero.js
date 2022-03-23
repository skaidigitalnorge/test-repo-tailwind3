import { ContentRenderer } from "../content-renderer";
import { ProductPrice } from "../product-data/product-price";

export const ProductHero = ({ product, activeVariant, onVariantChange }) => {
  return (
    <section id="product">
      {activeVariant && (
        <div className="">
          {activeVariant.title}

          {activeVariant.lowStock && activeVariant.inStock && (
            <span className="">Low Stock</span>
          )}

          {!activeVariant.inStock && <span className="">Out of Stock</span>}
        </div>
      )}
      <h1 className="">{product.title}</h1>

      <ProductPrice
        price={activeVariant?.price || product.price}
        comparePrice={activeVariant?.comparePrice || product.comparePrice}
      />

      {product.description && (
        <div>
          <ContentRenderer blocks={product.description} />
        </div>
      )}
    </section>
  );
};
