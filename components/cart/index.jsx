import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { cartToggle } from "../../Store/slices/globalSlice";
import CheckOut from "./checkOut";

// import styles from "./category-nav.module.css";

const CartNav = () => {
  const { isCartOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(cartToggle());
  };
  // console.log(isCartOpen);
  return (
    <div>
      {isCartOpen && (
        <div className="heightFull w-96 bg-primary higherPriority absolute top-0 right-0 flex justify-center">
          <div className="top-8">
            <span
              onClick={closeCart}
              className="absolute right-4 flex top-2 text-secondary cursor-pointer text-3xl ml-2 font-bold hover:text-primary-red"
            >
              <AiOutlineCloseCircle className="mr-4 mt-1" />
            </span>
            <p className="text-3xl text-center mt-16 text-secondary ">
              Shopping Cart
            </p>
            <hr className="h-px my-4 bg-secondary border-0 dark:bg-secondary" />
          </div>
          
          <div>
            <CheckOut/>
          </div>

          <div className=" bottom-10  cursor-pointer absolute place-items-center">
            <button class="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-honey rounded text-2xl text-center">
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartNav;
