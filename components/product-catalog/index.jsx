import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Button from "../Button";
import ReviewStar from "../Star/index";
import Image from "next/image";

import photo from "../../public/Products/Gold Honey/Gold Honey(3).jpeg";

const ProductCatalog = () => {
  return (
    <section className="relative container overflow-hidden top-3">
      <div className="lg:w-4/5 flex flex-wrap">
        <div className=" md:pt-5 lg:w-1/2 w-full lg:h-1/2 h-80 rounded flex justify-center">
          <div className="relative w-3/4">
            <Image src={photo} fill cover />
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h3 className="text-3xl font-medium">Product Name</h3>
          <div>
            <span className="flex items-center">
              <ReviewStar className={`flex text-honey`} />
              <span span className="text-gray-600 ml-3">
                4 Reviews
              </span>
            </span>
          </div>
          <div className="">
            <h2 className="text-lg title-font tracking-widest">
              Category:
              <span className="text-bold text-secondary">Male Enhancement</span>
            </h2>
            <h2 className="text-lg title-font tracking-widest">
              Availability:
              <span className="text-bold text-secondary"> In Stock</span>
            </h2>
          </div>
          <p className="leading-relaxed ml-5 text-lg">
            <ul className="list-disc">
              <li>Fam locavore kickstarter distillery.</li>
              <li>Fam locavore kickstarter distillery.</li>
              <li>Fam locavore kickstarter distillery.</li>
              <li>
                Fam locavore kickstarter distillery. Fam locavore kickstarter
                distillery.Fam locavore kickstarter distillery.
              </li>
              <li>
                Fam locavore kickstarter distillery. Fam locavore kickstarter
                distillery.Fam locavore kickstarter distillery.
              </li>
            </ul>
          </p>
          <div className="flex mt-2 items-center pb-5 border-b-2 mb-5"></div>
          <div className="flex justify-between items-center">
            <span className="title-font font-bold text-2xl text-secondary">
              $100.00
            </span>

            <Button className="text-2xl font-bold flex justify-center items-center bg-primary mr-5">
              <span className="hover:text-3xl hover:text-secondary hover:rounded-full hover:bg-gray">
                -
              </span>
              <span className="mx-8 my-2"> 5 </span>
              <span className="hover:text-secondary hover:rounded-full hover:bg-gray">
                +
              </span>
            </Button>
          </div>
          {/**butotn */}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
