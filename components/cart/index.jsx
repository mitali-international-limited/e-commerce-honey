import React from "react";
import {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {AiOutlineClose, AiOutlineCloseCircle} from "react-icons/ai";
// import {BsCart4} from "react-icons/bs";

import {cartToggle } from "../../Store/slices/globalSlice";

// import styles from "./category-nav.module.css";

const CartNav = () => {
  const { isCartOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
 const closeCart = () =>{
 dispatch (cartToggle())
 }
  // console.log(isCartOpen);
  return (
    <>
{
  isCartOpen && (

    <div className="h-96 w-96 bg-gray higherPriority absolute top-0 right-5">
    <div className="top-8">
    <p className="pt-2 ml-2 text-2xl">Shopping Cart</p>
    <span onClick={closeCart} className="absolute flex top-2 right-2 cursor-pointer text-2xl mr-2 hover:text-white"><AiOutlineCloseCircle className="mr-1 mt-1"/></span>
    </div>
    <ol>
      <li>
      <span className="w-2/3 bg-honey">Honey</span>
      <span className="w-1/3 bg-gray"> 5</span>
      </li>
    </ol>
      
    </div>
  )
}
    </>
  );
};

export default CartNav;
