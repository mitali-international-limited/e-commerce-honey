import React, { useState } from "react";
import Card from "../Card";
import categoryData from "../../utils/category-demo-data";
import Link from "next/link";

import styles from "./style.module.css";

const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className={`padding_inside relative top-36 md:top-48`}>
      <h2 className="mb-0">Top Categories</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
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
