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
    <section className=" relative mr-8 mb-12 pt-8 px-4 pb-4 w-2/4 h-full flex justify-between border-solid border border-gray md:w-full md:h-3/4">
      {/* Buy more slider section */}

      <div className="mb-8 p-8 text-center flex overflow-hidden md:w-2/4 md:h-3/4">
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
            <article className={`${styles[position]}`} key={id}>
              <Image
                src={image}
                alt={name}
                fill
                responsive
                className={styles.person_img}
              />
              *
              <div className="from-bottom absolute left-0 top-4/5 bottom-0 right-0 mx-0 my-auto">
                <div>
                  <h4>{name}</h4>
                  <p className="text-center transform-capitalize font-8 font-semibold text-black mb-4">
                    {title}
                  </p>
                  <p className="mx-0 my-auto line-1 font-600 mb-4">{quote}</p>
                  <Button className="bg-secondary hover:bg-primary-red mb-4">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
        <button
          className="absolute top-2/4 -translate-y-1/2 bg-gray text-black w-10 h-10 grid place-items-center border-transparent font-4 rounded-full cursor-pointer transition-all delay-75 hover:bg-secondary left-0"
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>
        <button className="absolute top-2/4 -translate-y-1/2 bg-gray text-black w-10 h-10 grid place-items-center border-transparent font-4 rounded-full cursor-pointer transition-all delay-75 hover:bg-secondary right-0" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ByMore;
