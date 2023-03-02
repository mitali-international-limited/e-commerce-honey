import React, { useState } from "react";
import Gallery from "../gallery";
import Card from "../Card";

import productData from "../../utils/products-demo";

const ProductSection = () => {
  const [product, setProduct] = useState(productData);
  return (
    <section className="padding_inside">
      <h2 className="mb-0 ">Hot Products</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
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
              percentage={`30%`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductSection;
