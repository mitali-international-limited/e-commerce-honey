import React, { useState } from "react";
import Gallery from "../gallery";
import categoryData from "../../utils/gallery-demo-data";
import Card from "../Card";

import productData from "../../utils/products-demo";

const ProductSection = () => {
  const [category, setCategory] = useState(categoryData);
  const [product, setProduct] = useState(productData);
  return (
    <section className="padding_inside">
      <h2 className="mb-0 ">Hot Products</h2>
      <hr className="h-px my-8 bg-secondary border-0 dark:bg-secondary" />
      <div className="grid md:grid-cols-5">
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
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductSection;
