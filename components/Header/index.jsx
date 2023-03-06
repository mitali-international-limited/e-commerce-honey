import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { toggle, favToggle } from "../../Store/slices/globalSlice";

import styles from "./style.module.css";
import logo from "../../Assets/logo 1.png";
import Sidebar from "../Sidebar";
import Navigation from "../Navigation";
import Favorite from "../favorite";
import DropdownCategory from "../dropdown-category";
import CategoryNav from "../category-nav";


const Header = () => {
  const [searchTerm, setSearchTerm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    dispatch(favToggle());
  };

  const openSearchBar = (event) => {
    event.preventDefault();
    setSearchTerm(!searchTerm);
  };

  const openCategoryMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.header_container}`}>
      <div className="padding_inside bg-primary h-1/2 md:h-full w-full">
        <div
          id="myHeader"
          className="relative grid gap-1 padding_inside items-center "
        >
          <div className="flex  justify-between h-full w-full items-center flex-wrap py-3">
            {/**logo */}
            <div className={`${styles.logo_box}`}>
              <Image src={logo} cover />
            </div>
            {/**cart */}
            <div className="md:hidden flex justify-center items-center space-x-5 md:order-4">
              <div
                className={`${styles.menu_button} md:hidden`}
                onClick={handleMenuOnClick}
              >
                <span className={`${styles.menu_button}`}></span>
              </div>
              <div className={styles.shopping_cart}>
                <span className={styles.cart_count}>5</span>
              </div>
            </div>
            {/**Header Nav */}
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
                    <Link href="/store/store" className="">
                      <span>Store</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span>Product</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/** */}

      {/**Header bottom start */}
      <div
        className={`${styles.header_bottom} padding_inside flex justify-between items-center `}
      >
        <div className="flex justify-center items-center space-x-2 text-white md:hidden">
          <div
            className={`${styles.drp_menu}`}
            onClick={openCategoryMenu}
          ></div>
          <p className="text-xl">Shop by category</p>
        </div>
        <div onClick={openSearchBar}>
          <div className={`${styles.search_icon} mr-5 md:hidden`}></div>
        </div>
      </div>
      {searchTerm && (
        <form className=" bg-primary h-16">
          <input
            type="text"
            placeholder={`What are you looking for today ...`}
            className="shadow-md appearance-none bg-white  text-base pl-10 py-4 pr-12 w-full focus:outline-none"
            onChange={handleChange}
          />
        </form>
      )}

      <div
        className={`${styles.dropdownMenu} ${
          isMenuOpen ? `${styles.open}` : ""
        }`}
      >
        <CategoryNav />
      </div>
      <Sidebar />
    </div>
  );
};

export default Header;
