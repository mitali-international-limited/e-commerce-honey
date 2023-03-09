import React from "react";
import styles from "./slider.module.css";

import { FaQuoteRight } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";

const LeftSection = () => {
  return (
    <div>
      <div className="scrollable-content mr-3 border-t-2 border-t-honey bg-primary text-secondary w-full leftHight shadow-hnx">
        <ul className={`${styles.dropdown_content} text-lg`}>
          <li className="space-x-2 py-5 px-9 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Royal Honey</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Black Bull Honey</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Blue Bull Honey</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Extumas Honey</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">VIP Honey</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Gold Honey</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Leopard Miracle</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Leopard Miracle</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer hover:bg-white shadow-sm hover:shadow-hnx">
            <a className=" font-semibold">Leopard Miracle</a>
            <span>
              <TiChevronRight className="text-secondary" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSection;
