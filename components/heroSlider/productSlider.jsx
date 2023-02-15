import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import data from "../../utils/products-demo";
import Button from "../Button";

import styles from "./slider.module.css";

const productSlider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className={styles.section_slider}>
      <div className={styles.section_center}>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          {
            /* //more stuff comming up */
          }
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={styles[position]} key={id}>
              <img src={image} alt={name} className={styles.person_img} />
              <div className="grid grid-cols-3 m-5 items-center gap-1 justify-between md:grid-cols-4">
                {product.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      name={item.name}
                      image={item.image}
                      quote={item.quote}
                      quantity={item.quantity}
                      price={item.price}
                      categoryType={`products`}
                    />
                  );
                })}
              </div>
            </article>
          );
        })}
        <button className={styles.prev} onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className={styles.next} onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default productSlider;
