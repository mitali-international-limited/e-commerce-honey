import React, { useState } from "react";
import Top from "./topRanking";
import categoryData from "../../../utils/newArrivals-demo-data"

const TopSection = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className="padding_inside relative">
      <h3 className="mb-0 pt-2 pl-2">Top Ranking</h3>
      {/* <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" /> */}
      <div className="grid grid-cols-3 m-2 gap-1 justify-between md:grid-cols-3 sm:grid-cols-3">
        {category.map((item, index) => {
          return (
            <Top
              key={index}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              cardType="category"
            />
          );
        })}
      </div>
    </section>
  );
};

export default TopSection;
