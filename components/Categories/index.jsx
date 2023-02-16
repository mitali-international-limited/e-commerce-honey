import React, {useState} from "react";
import Card from "../Card";
import categoryData from "../../utils/category-demo-data";

const Categories = () => {
  const [category, setCategory] = useState (categoryData)
  return (
    <section className="padding_inside">
      <h2 className="mb-0 ">Top Categories</h2>
      <hr className="mx-0"/>
      <div className="grid grid-cols-2 items-center gap-3 justify-between md:grid-cols-4">
        {
          category.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                image={item.image}
                cardType="category"
              />
            )
          })
        }
      </div>
    </section>
  );
};

export default Categories;
