// **Women Products Section
// **Developed by Dev-2(Mehedi Hasan Munna)

import React, { useState } from "react";
import Card from "../Card";
import productData from "../../utils/products-demo";
import Link from "next/link";
import ByMoreSection from "./buyMore";

const Women = () => {
  const [product, setProduct] = useState(productData);
  return (
    <div className="relative top-36 md:top-48 flex flex-col md:flex-row">
      <section className="padding_inside md:w-3/5 h-auto">
        <div className="flex flex-col md:flex-row">
          <h2 className="mb-0 ">For Women</h2>
          <div className="flex ml-4">
            <Link href="#">
              <button className="mt-10 ml-0 text-2xl mb-0 text-gray hover:text-honey hover:underline">
                Honey
              </button>
            </Link>
            <Link href="#">
              <button className="mt-10 ml-4 text-2xl mb-0 text-gray hover:text-honey hover:underline">
                Pill
              </button>
            </Link>
            <Link href="#">
              <button className="mt-10 ml-4 text-2xl mb-0 text-gray hover:text-honey hover:underline">
                Liquid Shots
              </button>
            </Link>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
        <div className="grid grid-cols-2 m-5 gap-1 md:grid-cols-5 sm:grid-cols-3">
          {product.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                image={item.image}
                category={item.category}
                quote={item.quote}
                quantity={item.quantity}
                price={item.price}
                categoryType={`products`}
                percentage={`20%`}
              />
            );
          })}
        </div>
      </section>
      <div className="md:w-2/5">
        <h2 className="ml-2 shadow-sm">Buy More Save More</h2>
        <ByMoreSection />
      </div>
    </div>
  );
};

export default Women;
