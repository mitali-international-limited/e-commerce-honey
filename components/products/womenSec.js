// **Women Products Section
// **Developed by Dev-2(Mehedi Hasan Munna)

import React, { useState } from "react";
import Card from "../Card";
import productData from "../../utils/products-demo";
import Link from "next/link";
import ByMoreSection from "./buyMore";
import CommonCard from "../CommonCard";

import pill1 from "../../public/Products/Pills/Pandora-for-Women-Front-Side.jpg";
import pill2 from "../../public/Products/Pills/Spanish-fly-22000-Front-Side-Red.jpg";
import pill3 from "../../public/Products/Pills/Zesus-250k-Front-Side.jpg";
import pill4 from "../../public/Products/Pills/Bullet-3000-Front-Side.jpg";
import pill5 from "../../public/Products/Pills/Rhino-69-1200k-Front-Side.jpg";
import pill6 from "../../public/Products/Pills/Magnum-Gold-1000k-Gold-Side.jpg";

const Women = () => {
  const [product, setProduct] = useState(productData);
  return (
    <div className="relative top-36 md:top-48 flex flex-col md:flex-row">
      <section className="padding_inside md:w-3/5 h-auto">
        <div className="">
          <h2 className="">For Women</h2>
          <div className="flex space-x-10 pb-5">
            <Link href="#">
              <button className="text-2xl mb-0 text-gray hover:text-honey hover:underline active">
                Pill
              </button>
            </Link>
            <Link href="#">
              <button className=" text-2xl mb-0 text-gray hover:text-honey hover:underline">
                Liquid Shots
              </button>
            </Link>
          </div>
        </div>
        <hr className="h-px  bg-gray border-0 dark:bg-gray" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 sm:grid-cols-3">
          <CommonCard image={pill1} percentage={"Hot"} />
          <CommonCard image={pill2} percentage={"Hot"} />
          <CommonCard image={pill3} percentage={"Hot"} />
          <CommonCard image={pill4} percentage={"Hot"} />
          <CommonCard image={pill5} percentage={"Hot"} />
          <CommonCard image={pill6} percentage={"Hot"} />
        </div>
      </section>
      <div className="md:w-2/5">
        <h2 className="ml-2 pt-2">Buy More Save More</h2>
        <ByMoreSection />
      </div>
    </div>
  );
};

export default Women;
