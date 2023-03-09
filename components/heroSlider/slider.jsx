import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";
import Link from "next/link";

import data from "../../utils/data-demo";
import Button from "../Button";

import Image from "next/image";

import styles from "./slider.module.css";

const Slider = () => {
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
    <section className={`w-full relative`}>
      <div
        className={`${styles.section_slider} flex justify-center md:space-x-5 md:padding_inside`}
      >
        {/* left section */}

        <div className="scrollable-content mr-3 border-t-2 border-t-honey bg-primary text-secondary w-1/5 h-auto hidden md:block shadow-hnx">
          <ul className={`${styles.dropdown_content} text-lg`}>
            <li className="space-x-2 py-5 px-9 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Royal Honey</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Black Bull Honey</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Blue Bull Honey</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Extumas Honey</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">VIP Honey</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Gold Honey</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Leopard Miracle</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Leopard Miracle</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
            <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
              <a className=" font-semibold">Leopard Miracle</a>
              <span>
                <TiChevronRight className="text-secondary" />
              </span>
            </li>
          </ul>
        </div>

        {/* middle heroslide section */}

        <div className={`${styles.section_center}  flex-1`}>
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
              <article className={`${styles[position]}`} key={id}>
                <Image
                  src={image}
                  alt={name}
                  fill
                  cover
                  className={styles.person_img}
                />

                <div className={`${styles.slider_content} from-bottom`}>
                  <Button className="bg-secondary text-primary hover:bg-honey hover:text-black">
                    Shop Now
                  </Button>
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

        {/* right section */}
      </div>
    </section>
  );
};

export default Slider;

// This section is for, when i use backend fatch api

// export async function getStaticProps() {
//   const res = await fetch("../../utils/data-demo.json");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
