// BuyMore Section
// Developed By Mehedi Hasan Munna (Dev-2)

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import data from "../../utils/data-demo";
import styles from "../heroSlider/slider.module.css";

import Button from "../Button";
import Image from "next/image";


const ByMore = () => {
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
    <section
      className={`mr-8 mb-20 pt-8 px-8 pb-20 w-full h-full flex justify-between border-solid border border-gray`}
    >
      {/* Buymore heroslide section */}

      <div className={styles.section_center}>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

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
            <article
              className={`${styles[position]}`}
              key={id}
            >
              <Image
                src={image}
                alt={name}
                fill
                responsive
                className={styles.person_img}
              />
              *
              <div className={`${styles.slider_content} from-bottom`}>
                <div>
                  <h4>{name}</h4>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.text}>{quote}</p>
                  <Button className="bg-secondary hover:bg-tertiary">
                    Add to Cart
                  </Button>
                </div>
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

export default ByMore;
