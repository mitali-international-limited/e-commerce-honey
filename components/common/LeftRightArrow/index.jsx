import React from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import styles from "./style.module.css";

const LeftRightArrow = ({ setIndex, index }) => {
  return (
    <>
      <button className={styles.prev} onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className={styles.next} onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default LeftRightArrow;
