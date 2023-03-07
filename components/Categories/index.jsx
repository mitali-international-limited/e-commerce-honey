import React, { useEffect, useState, useRef } from "react";
import Card from "../Card";
import categoryData from "../../utils/category-demo-data";
import Link from "next/link";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import styles from "./style.module.css";
const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  const cardBoxRef = useRef(null);

  useEffect(() => {
    console.log(cardBoxRef.current.scrollLeft);
  }, []);

  const handlePreviousCategory = (e) => {
    let width = cardBoxRef.current.clientWidth;
    cardBoxRef.current.scrollLeft -= width;
    console.log((cardBoxRef.current.scrollLeft -= width));
  };

  const handleNextCategory = (e) => {
    let width = cardBoxRef.current.clientWidth;
    cardBoxRef.current.scrollLeft += width;
  };

  return (
    <section className={`padding_inside relative top-36 md:top-48 `}>
      <h2 className="mb-0">Top Categories</h2>
      <hr className="h-px my-5 bg-gray border-0 dark:bg-gray" />
      <div
        className="flex items-center gap-3 justify-between p-6 scroll-smooth x-scrollable-content"
        ref={cardBoxRef}
      >
        {category.map((item, index) => {
          return (
            <div className={`${styles.categoryCard}`} key={index}>
              <Card
                key={index}
                name={item.name}
                image={item.image}
                cardType="category"
              />
            </div>
          );
        })}
      </div>
      <div>
        <button className={styles.prev} onClick={handlePreviousCategory}>
          <FiChevronLeft />
        </button>
        <button className={styles.next} onClick={handleNextCategory}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Categories;
