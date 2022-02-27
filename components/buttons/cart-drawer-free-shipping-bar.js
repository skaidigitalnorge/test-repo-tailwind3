import { useEffect, useState } from "react";

export const CartDrawerFreeShippingBar = ({ kroner_spent }) => {
  const percentage_filled = kroner_spent / 10;
  const kroner_left = 1000 - kroner_spent;
  const [reachedFreeShipping, setReachedFreeShipping] = useState(false);
  useEffect(() => {
    if (kroner_left <= 0) {
      setReachedFreeShipping(true);
    } else {
      setReachedFreeShipping(false);
    }
  }, [kroner_left]);
  return (
    <div className="px-40 text-small md:text-body_small font-medium">
      {" "}
      {reachedFreeShipping ? (
        <span className="text-body_small">
          Grattis! Du får gratis standardfrakt!
        </span>
      ) : (
        <span className="text-body_small">
          Du er {kroner_left} kr unna gratis frakt!
        </span>
      )}
      <div className="w-100 rounded-rund h-12 bg-primary_50 my-8 mb-32">
        <div
          className="bg-primary_700 animate-pulse h-12 rounded-rund mb-4"
          style={{ width: `${percentage_filled}%`, maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};
