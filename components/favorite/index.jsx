import React from "react";

import { useSelector } from "react-redux";

import styles from "./style.module.css";

const Favorite = () => {
  const { isModalOpen } = useSelector((state) => state.sidebar);
  console.log(isModalOpen);
  return (
    <>
      {isModalOpen && (
        <div
          className={`${styles.fav__container} bg-white border rounded-sm  border-secondary`}
        >
          <h5 className="text-center font-semibold p-3">Favorite Items</h5>
          <hr className="h-px my-2 bg-secondary border-0 dark:bg-secondary" />
          <div className="flex flex-col justify-center items-center">
            Your Favorite List is Empty
          </div>
        </div>
      )}
    </>
  );
};

export default Favorite;
