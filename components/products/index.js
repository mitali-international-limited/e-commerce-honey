import React, { useState } from "react";
import Card from "../Card";
import productData from "../../utils/products-demo";

const Products = () => {
  const [product, setProduct] = useState(productData);
  return (
    <section>
      <h2 className="text-center">Top Products</h2>
      <div className="grid grid-cols-2 m-5 items-center gap-5 justify-between md:grid-cols-4">
        {product.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              quote={item.quote}
              quantity={item.quantity}
              price={item.price}
              categoryType={`products`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
