import React, { useEffect, useRef } from "react";
import styles from "./sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

import { useDispatch, useSelector } from "react-redux";

import { toggle } from "@/Store/slices/globalSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);

  const handleMenuButton = (event) => {
    event.preventDefault();
    dispatch(toggle());
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggle());
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={` ${
        isSidebarOpen
          ? `${styles.sidebar} ${styles.show_sidebar}`
          : `${styles.sidebar}`
      }`}
    >
      <nav className="px-5 py-3">
        <ul
          className={`${styles.table_header} flex justify-between items-center`}
        >
          <li>
            <a>Categories</a>
          </li>
          <li
            className="text-primary-red cursor-pointer text-lg"
            onClick={handleMenuButton}
          >
            <FaTimes />
          </li>
        </ul>
      </nav>
      <hr className="text-secondary font-bold" />
      <nav className={`${styles.table_content} text-xl`}>
        <ul className="grid">
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
            <a>Honey</a>
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
            <a>Male enhancement</a>
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
            <a>Female enhancement</a>
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
            <a>Rolling Paper</a>
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
            <a>Condoms</a>
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
          </li>
          <li className="py-5 px-9 space-x-2 flex justify-between items-center cursor-pointer">
            <a>Pills</a>
            <span>
              <TiArrowSortedDown className="text-secondary" />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
