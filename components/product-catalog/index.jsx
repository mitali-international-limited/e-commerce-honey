import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button";

const ProductCatalog = () => {
  return (
    <section className="relative text-gray-600 overflow-hidden">
      <div className="container m-auto padding_inside">
        <div className="lg:w-4/5 flex flex-wrap">
          <img
            alt="e-commerce"
            className="md:pt-5 lg:w-1/2 w-full lg:h-1/2 h-80 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Demo Product
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <div className="">
              <h2 className="text-lg title-font tracking-widest">
                Category:
                <span className="text-bold text-secondary">
                  Male Enhancement
                </span>
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

              <Button className="w text-2xl font-bold flex justify-center items-center bg-primary">
                <span className="hover:text-3xl">-</span>
                <span className="mx-8 my-2"> 5 </span>
                <span>+</span>
              </Button>
            </div>
            <div className="flex justify-between items-center mt-6">
              <Button className="flex space-x-1 items-center text-secondary border rounded border-secondary">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
                <span className="">Add to whitelist</span>
              </Button>
              <Button className=" text-white bg-secondary hover:text-white rounded-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
