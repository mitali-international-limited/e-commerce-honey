import React from "react";
import Button from "../Button";

import { SiShopify } from "react-icons/si";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const ProductButton = () => {
  return (
    <div
      className="w-auto bg-primary fixed right-0 top-1/3 transform -translate-y-1/2  md:hidden -rotate-90 higherPriority"
      style={{ transformOrigin: "bottom right" }}
    >
      <Button className="text-white bg-secondary hover:text-white rounded-full">
        {/* <AiFillHeart/> */}
        <span className="flex space-x-3 items-center">
          <span>
            <SiShopify />
          </span>
          <span>Buy Now</span>
        </span>
      </Button>
      <Button className=" text-white bg-secondary hover:text-white rounded-full">
        <span className="flex space-x-3 items-center">
          <span>
            <HiOutlinePlusCircle />
          </span>
          <span>Add to Cart</span>
        </span>
      </Button>
    </div>
  );
};

export default ProductButton;
