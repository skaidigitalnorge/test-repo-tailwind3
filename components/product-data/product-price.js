import { centsToPrice } from "../../lib/helpers";

export const ProductPrice = ({ price, comparePrice }) => {
  return (
    <div className="price">
      <span className="price--current">${centsToPrice(price)}</span>

      {!!comparePrice && (
        <span className="price--discount">
          {Math.ceil(((comparePrice - price) / comparePrice) * 100)}% off
        </span>
      )}
    </div>
  );
};
