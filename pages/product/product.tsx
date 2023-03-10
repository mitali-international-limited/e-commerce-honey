import React, { useState, useEffect } from "react";

import RelProduct from "../../components/Card";
import RelProductData from "../../utils/products-demo";
import ProductCatalog from "../../components/product-catalog";
import ProductButton from "../../components/product-button";

const product = () => {
  const [product, setProduct] = useState(RelProductData);

  // useEffect(() => {
  //   const setMainHeight = () => {
  //     const main = document.getElementById("mainElement");
  //     const aside = document.getElementById("asideElement");

  //     if (aside && main) {
  //       const sideHeight = main.offsetHeight;
  //       aside.style.maxHeight = `${sideHeight}px`;
  //     }
  //   };
  //   setMainHeight();

  //   const mediaQuery = window.matchMedia("(min-width: 778px)");
  //   if (mediaQuery.matches) {
  //     mediaQuery.addListener(setMainHeight); // Call the function when the media query matches
  //   }
  // }, []);

  return (
    <div className="relative grid  top-36 md:top-48 md:pt-8 grid_cols_5">
      <div
        className="mx-4 md:border-r border-gray dark:border-b-gray"
        id="mainElement"
      >
        <ProductCatalog />

        {/* Related Product Section */}

        {/* <section className="padding_inside m-auto">
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
        </section> */}
      </div>

      {/* you may also like section*/}

      <aside className="ml-4 flex-wrap pb-10 mr-8 pr-4" id="asideElement">
        <h4 className="text-center text-secondary shadow-sm ">
          You May Also Like
        </h4>
        {/* <hr className="h-px my-0 bg-gray border-0 dark:bg-gray" /> */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
          {product.map((item, index) => {
            if (index < 4) {
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
            }
          })}
        </div>
      </aside>
      <ProductButton />
    </div>
  );
};

export default product;
