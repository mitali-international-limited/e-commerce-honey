import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import RelProduct from "../components/Card/index";
import RelProductData from "../utils/products-demo";

const product = () => {
  const [product, setProduct] = useState(RelProductData);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="lg:w-4/5 md:w-full sm:w-full mx-4 md:border-r border-gray dark:border-b-gray">
        <section className="text-gray-600 body-font overflow-hidden mt-36">
          <div className="container px-5 py-24 m-auto">
            <div className="lg:w-4/5 ml-8 flex flex-wrap">
              <img
                alt="e-commerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
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
                      {" "}
                      Male Enhancement
                    </span>
                  </h2>
                  <h2 className="text-lg title-font tracking-widest">
                    Availability:
                    <span className="text-bold text-secondary"> In Stock</span>
                  </h2>
                </div>
                <p className="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
                <div className="flex mt-2 items-center pb-5 border-b-2 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-black">
                    $100.00
                  </span>
                  <button className="flex rounded-full w-10 h-10 bg-gray p-0 border-0 items-center justify-center text-white hover:bg-secondary ml-auto">
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
                  </button>
                </div>
                <div className="flex">
                  <div className="flex mt-2 py-2 px-6 border text-secondary text-center rounded-full">
                    <button className="mx-2 text-black hover:text-secondary">
                      <FaMinus />
                    </button>
                    <div className="mx-8 my-2"> 5 </div>
                    <button className="mx-2 text-black hover:text-secondary">
                      <FaPlus />
                    </button>
                  </div>
                  <button className="flex ml-auto text-white bg-secondary mt-2 border-2 py-4 px-6 hover:bg-tertiary hover:text-white rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Product Section */}

        <section className="padding_inside lg:w-4/5 m-auto">
          <h2 className="mb-0 ">Related Products</h2>
          <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
          <div className="grid grid-cols-2 m-5 gap-1 md:grid-cols-4 sm:grid-cols-2">
            {product.map((item, index) => {
              return (
                <RelProduct
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
      </div>

      {/* you may also like section*/}

      <section className="lg:w-1/5 md:w-1/5 ml-4 flex-wrap mt-48 mr-8 pr-4">
        <h4 className="text-center bt- text-secondary shadow-sm ">You May Also Like</h4>
        {/* <hr className="h-px my-0 bg-gray border-0 dark:bg-gray" /> */}
        <div className="grid grid-cols-2 m-5 gap-1 md:grid-cols-1 sm:grid-cols-1">
          {product.map((item, index) => {
            return (
              <RelProduct
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
    </div>
  );
};

export default product;
