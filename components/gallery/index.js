import React, { useState } from "react";
import Gallery from "./gallery";
import categoryData from "../../utils/gallery-demo-data";

const gallerySection = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className="padding_inside ">
      <h2 className="mb-0">Gallery</h2>
      <hr className="h-px my-8 bg-secondary border-0 dark:bg-secondary" />
      <div className="grid grid-cols-1 m-5 gap-1 justify-between md:grid-cols-3 sm:grid-cols-3">
        {category.map((item, index) => {
          return (
            <Gallery
              key={index}
              name={item.name}
              image={item.image}
              quote={item.quote}
              cardType="category"
            />
          );
        })}
      </div>
    </section>
  );
};

export default gallerySection;
