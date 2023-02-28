import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
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
    <section
      className={`${styles.section_slider} flex justify-between w-100% h-auto`}
    >
      {/* left section */}

      <div className="bg-primary mx-10 w-25% h-auto hidden md:block">
        <div className=" ">
          <div className="flex justify-between p-4 mt- mb- cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
                <span className="m-2 pt-1">Section 1</span>
            </div>
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
              className="h-10 w-10 m-2 pt-2"
            ></img>
          </div>

          <div className="flex justify-between p-3 mt- mb- cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
              <span className="m-2 pt-1">Section 2</span>
            </div>
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
              className="h-10 w-10 m-2 pt-2"
            ></img>
          </div>

          <div className="flex justify-between p-3 mt- mb- cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
              <span className="m-2 pt-1">Section 3</span>
            </div>
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
              className="h-10 w-10 m-2 pt-2"
            ></img>
          </div>

          <div className="flex justify-between p-3 mt- mb- cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
              <span className="m-2 pt-1">Section 4</span>
            </div>
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
              className="h-10 w-10 m-2 pt-2"
            ></img>
          </div>

          <div className="flex justify-between p-3 mt- mb- cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
              <span className="m-2 pt-1">Section 5</span>
            </div>
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
              className="h-10 w-10 m-2 pt-2"
            ></img>
          </div>

          <div className="flex justify-between p-3 mt- mb- cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
              <span className="m-2 pt-1">Section 6</span>
            </div>
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
              className="h-10 w-10 m-2 pt-2"
            ></img>
          </div>
        </div>
      </div>

      {/* middle heroslide section */}

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
            <article className={`${styles[position]}`} key={id}>
              <Image
                src={image}
                alt={name}
                fill
                responsive
                className={styles.person_img}
              />
              <div className={`${styles.slider_content} from-bottom`}>
                <div>
                  <h4>{name}</h4>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.text}>{quote}</p>
                  <Button className="bg-secondary hover:bg-tertiary">
                    Shop Now
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

      {/* right section */}

      <div className="bg-primary mx-10 w-25% h-auto hidden md:block">
        <div className=" ">
          <div className="flex justify-between py-3 mt- mb- cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
                className="h-10 w-10 m-2 pb-2 rotate-180"
              ></img>
              <span className="m-2 pt-1">Section 1</span>
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
            </div>
          </div>

          <div className="flex justify-between py-2 mt-2 mb-2 cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
                className="h-10 w-10 m-2 pb-2 rotate-180"
              ></img>
              <span className="m-2 pt-1">Section 2</span>
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
            </div>
          </div>

          <div className="flex justify-between py-2 mt-2 mb-2 cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
                className="h-10 w-10 m-2 rotate-180 pb-2"
              ></img>
              <span className="m-2 pt-1">Section 3</span>
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
            </div>
          </div>

          <div className="flex justify-between py-2 mt-2 mb-2 cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
                className="h-10 w-10 m-2 rotate-180 pb-2"
              ></img>
              <span className="m-2 pt-1">Section 4</span>
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
            </div>
          </div>

          <div className="flex justify-between py-2 mt-2 mb-2 cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
                className="h-10 w-10 m-2 rotate-180	pb-2"
              ></img>
              <span className="m-2 pt-1">Section 5</span>
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
            </div>
          </div>

          <div className="flex justify-between py-3 mt-2 mb-2 cursor-pointer hover:bg-white">
            <div className="flex justify-between">
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01fxbIHT1bncwfIiBKg_!!6000000003510-2-tps-32-32.png"
                className="h-10 w-10 m-2 rotate-180	pb-2"
              ></img>
              <span className="m-2 pt-1">Section 6</span>
              <span className="flex justify-between">
                <img
                  src="https://img.alicdn.com/imgextra/i3/O1CN01cq8Gpz1df2kx1RvCH_!!6000000003762-2-tps-80-80.png"
                  alt=""
                  className="h-12 w-15 m-2 rounded-full"
                ></img>
              </span>
            </div>
          </div>
        </div>
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
