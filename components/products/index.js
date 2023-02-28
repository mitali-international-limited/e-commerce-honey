import React, { useState } from "react";
import Card from "../Card";
import productData from "../../utils/products-demo";

const Products = () => {
  const [product, setProduct] = useState(productData);
  return (
    <section className="padding_inside">
      <h2 className="mb-0 ">Top Products</h2>
      <hr className="h-px my-8 bg-secondary border-0 dark:bg-secondary" />
      <div className="grid grid-cols-3 m-5 gap-1 md:grid-cols-5 sm:grid-cols-3">
        {product.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              category={item.category}
              quote={item.quote}
              quantity={item.quantity}
              price={item.price}
              categoryType={`products`}
              percentage={`20%`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
