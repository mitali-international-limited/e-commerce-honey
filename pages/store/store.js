// Store page
// Developed By Mehedi Hasan Munna (Dev-2)

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";
import Link from "next/link";
import styles from "../../components/heroSlider/slider.module.css";

import data from "../../utils/data-demo";
import Button from "../../components/Button";

import NewArrivals from "./newArrivals/index";
import TopRankings from "./topRanking/index";
import WeeklyDeals from "./weeklyDeals/index";
import TopProducts from "./topProduct/index";
import HotProducts from "./hotProduct/index";
import WomenProducts from "./womenProduct/index";


import Image from "next/image";

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
    <div className="">
      <section
        className={`${styles.section_slider} flex justify-between w-100% h-auto `}
      >
        {/* heroslide section */}

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
              <article className={`${styles[position]}`} key={id}>
                <Image
                  src={image}
                  alt={name}
                  fill
                  responsive
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
      </section>
      <div className="grid grid-cols-1 m-5 gap-4 justify-between md:grid-cols-3 sm:grid-cols-3 relative top-36">
        <div className="bg-white rounded-xl">
          <NewArrivals />
        </div>
        <div className="bg-white rounded-xl">
          <TopRankings />
        </div>
        <div className="bg-white rounded-xl">
          <WeeklyDeals />
        </div>
        <div className="bg-white rounded-xl">
          <HotProducts />
        </div>
        <div className="bg-white rounded-xl">
          <WomenProducts />
        </div>
      </div>
      <div className="grid grid-cols-1 m-5 gap-4 justify-between md:grid-cols-1 sm:grid-cols-1 relative top-36">
          <TopProducts />
        </div>
    </div>
  );
};

export default Slider;
