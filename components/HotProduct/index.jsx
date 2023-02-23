import React, { useState } from "react";
import Gallery from "../gallery";
import categoryData from "../../utils/gallery-demo-data";

const ProductSection = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className="padding_inside m-20">
      <h2 className="mb-0 ">Hot Products</h2>
      <hr className="h-px my-8 bg-secondary border-0 dark:bg-secondary" />
      <div className="grid grid-cols-4 items-center gap-3 justify-between md:grid-cols-4">
        {category.map((item, index) => {
          return (
            <Gallery
              key={index}
              name={item.name}
              image={item.image}
              cardType="category"
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductSection;
