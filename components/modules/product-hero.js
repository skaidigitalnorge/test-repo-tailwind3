import { ContentRenderer } from "../content-renderer";
import { ProductPrice } from "../product-data/product-price";
import { Container } from "../utils/base";

const ProductHero = ({ index, product, activeVariant, onVariantChange }) => {
  const { originalTitle, replacementTitle, slug } = product;

  return (
    <Container>
      <section id="product" className="my-80">
        {/* {activeVariant && (
        <div className="">
          {activeVariant.title}

          {activeVariant.lowStock && activeVariant.inStock && (
            <span className="">Low Stock</span>
          )}

          {!activeVariant.inStock && <span className="">Out of Stock</span>}
        </div>
      )}
      <h1 className="">{product.title}</h1> */}

        <div>Her er orig title: {originalTitle}</div>
        <div>Her er replacement title: {replacementTitle}</div>

        {/* <ProductPrice
        price={activeVariant?.price || product.price}
        comparePrice={activeVariant?.comparePrice || product.comparePrice}
      />

      {product.description && (
        <div>
          <ContentRenderer blocks={product.description} />
        </div>
      )} */}
      </section>
    </Container>
  );
};

export default ProductHero;
