import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import cartDemo from "../../utils/cart-demo-data";

const CheckOut = () => {
  return (
    <div className="">
        <div className="pl-4 pt-4 flex flex-cols-2 gap-4 h-10 w-full">
          <div className="left-2 h-10 font-bold">Royal Honey</div>
          <div className="right-2">
            <div class="flex flex-row h-10 w-full relative">
              <span class="text-2xl font-bold cursor-pointer px-2 rounded-full bg-honey pt-2">
                <AiOutlineMinus />
              </span>
              <span className="px-4">5</span>
              <span class="text-2xl font-bold cursor-pointer px-2 rounded-full bg-honey pt-2">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
        </div>

        <div className="pl-4 pt-4 flex flex-row gap-8">
          <div className="font-bold">Black Bull Honey</div>
          <div className="">
            <div class="flex flex-row h-10 w-full relative">
              <span class="text-2xl font-bold cursor-pointer px-2 rounded-full bg-honey pt-2">
                <AiOutlineMinus />
              </span>
              <span className="px-4">5</span>
              <span class="text-2xl font-bold cursor-pointer px-2 rounded-full bg-honey pt-2">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
        </div>

        <div className="pl-4 pt-4 flex flex-row gap-8">
          <div className="font-bold">Blue Bull Honey</div>
          <div className="">
            <div class="flex flex-row h-10 w-full  relative">
              <span class="text-2xl font-bold cursor-pointer px-2 rounded-full bg-honey pt-2">
                <AiOutlineMinus />
              </span>
              <span className="px-4">5</span>
              <span class="text-2xl font-bold cursor-pointer px-2 rounded-full bg-honey pt-2">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
        </div>

    </div>
  );
};

export default CheckOut;
