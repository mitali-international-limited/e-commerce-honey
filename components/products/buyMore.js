// BuyMore Section
// Developed By Mehedi Hasan Munna (Dev-2)

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import data from "../../utils/data-demo";
import styles from "../heroSlider/slider.module.css";

import Button from "../Button";
import Image from "next/image";
import PhotoSlider from "../heroSlider/photo-slider";

const ByMore = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="relative w-full h-full flex text-center justify-center">
      <PhotoSlider data={data} delayTime={7000} />
    </section>
  );
};

export default ByMore;
