import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { toggle, favToggle } from "../../Store/slices/globalSlice";

import styles from "./style.module.css";

import Sidebar from "../Sidebar";
import Navigation from "../Navigation";
import Favorite from "../favorite";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSticky, setSticky] = useState(false);

  // sticky Header
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 0) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuOnClick = (event) => {
    event.preventDefault();
    dispatch(toggle());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term (e.g., perform a search)
  };

  const openFavoriteModal = (event) => {
    event.preventDefault();
    console.log("fav click");
    dispatch(favToggle());
  };

  return (
    <div className={`${styles.header_container}`}>
      <div className="bg-primary h-full w-full">
        <div id="myHeader" className="grid gap-1 padding_inside items-center ">
          <div className="flex justify-between items-center flex-wrap p-3 ">
            <div className=" basis-16 flex justify-center  items-center md:hidden">
              <div
                className={`${styles.menu_button}`}
                onClick={handleMenuOnClick}
              ></div>
              <p>
                <span>Menu</span>
              </p>
            </div>
            <a href="/" className={`${styles.logo_box} md:order-1`}></a>
            <div className="basis-16 flex justify-center items-center space-x-5 md:order-4">
              <div
                className={styles.favourite_cart}
                onClick={openFavoriteModal}
              >
                <span className={styles.favorite_count}>0</span>
              </div>
              <div className={styles.shopping_cart}>
                <span className={styles.cart_count}>0</span>
              </div>
            </div>
            <div className="hidden md:block md:order-3 h-7 flex-1">
              <nav>
                <ul className="flex justify-around items-center">
                  <li>
                    <a href="/" className="">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="">
                      <span>Store</span>
                    </a>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/auth/signin",
                      }}
                      className=""
                    >
                      <span>Profile</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <form
              onSubmit={handleSubmit}
              className={`${styles.search_bar} ${styles.item_form} md:flex-1 basis-full m-3 md:order-2`}
            >
              <div className={styles.search_icon}></div>
              <div className="grow">
                <input
                  type="text"
                  placeholder={`What are you looking for today ...`}
                  className="appearance-none bg-white  text-base pl-10 py-4 pr-12 w-full focus:outline-none"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block">
          <hr className="h-px bg-secondary border-0 dark:bg-secondary" />
          <div className=" my-auto w-full text-lg bg-white">
            <Navigation />
          </div>
          <hr className="h-px bg-secondary border-0 dark:bg-secondary" />
        </div>
      </div>
      <Sidebar />
      <Favorite />
    </div>
  );
};

export default Header;
