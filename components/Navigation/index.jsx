import React from "react";

import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className="my-auto mx-0">
      <ul
        className={`${styles.menu_dropdown} flex justify-center font-semibold p-5 items-center h-full`}
      >
        <li className="flex-1 text-center">
          <a href="/" className="">
            <span>Honey</span>
          </a>
        </li>
        <li className="flex-1 text-center">
          <a href="/" className="">
            <span>Male Enhancement</span>
          </a>
        </li>
        <li className="flex-1 text-center">
          <a href="/" className="">
            <span>Female Enhancement</span>
          </a>
        </li>
        <li className="flex-1 text-center">
          <a href="/" className="">
            <span>Rolling Paper</span>
          </a>
        </li>
        <li className="flex-1 text-center">
          <a href="/" className="">
            <span>Condoms</span>
          </a>
        </li>
        <li className="flex-1 text-center">
          <a href="/" className="">
            <span>Pills</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
