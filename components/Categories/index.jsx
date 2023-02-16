import React, { useState } from "react";
import Card from "../Card";
import categoryData from "../../utils/category-demo-data";

import styles from "./style.module.css";

const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className={`padding_inside my-20`}>
      <h2 className="mb-0">Top Categories</h2>
      <hr className="mx-0 mb-5" />
      <div className="grid grid-cols-2 items-center gap-3 justify-between p-6 md:grid-cols-4">
        {category.map((item, index) => {
          return (
            <Card
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

export default Categories;
