import React, { useState } from "react";
import Weekly from "./weeklyDeals";
import categoryData from "../../../utils/newArrivals-demo-data"

const WeeklySection = () => {
  const [category, setCategory] = useState(categoryData);
  return (
    <section className="padding_inside relative">
      <h3 className="mb-0 pt-2 pl-2">Weekly Deals</h3>
      <div className="grid grid-cols-3 m-2 gap-1 justify-between md:grid-cols-3 sm:grid-cols-3">
        {category.map((item, index) => {
          return (
            <Weekly
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

export default WeeklySection;
