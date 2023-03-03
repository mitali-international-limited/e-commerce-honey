import React from "react";

import { FaPlus } from "react-icons/fa";

const DropdownCategory = () => {
  return (
    <nav className=" bg-primary h-screen font-bold text-xl">
      <ul className="w-full padding_inside">
        <li className="flex justify-between items-center">
          <a>Honey</a>
          <span className="text-secondary pl-8">
            <FaPlus />
          </span>
        </li>
        <li className="flex justify-between items-center">
          <a>Male Enhancement</a>
          <p className="text-secondary">
            <FaPlus />
          </p>
        </li>
        <li className="flex justify-between items-center">
          <a>Female Enhancement</a>
          <p className="text-secondary">
            <FaPlus />
          </p>
        </li>
        <li className="flex justify-between items-center">
          <a>Rolling Paper</a>
          <p className="text-secondary">
            <FaPlus />
          </p>
        </li>
        <li className="flex justify-between items-center">
          <a>Pills</a>
          <p className="text-secondary">
            <FaPlus />
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default DropdownCategory;
