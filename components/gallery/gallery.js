import React from "react";
import styles from "./gallery.module.css";

const gallery = (props) => {
  const { id, name, image, cardType, quote } = props;
  return cardType === "category" ? (
    <div
      className={`${styles.gallery} cursor-pointer items-center justify-center transition-all`}
    >
      <div className=" ">
        <img src={image} />
      </div>
      <p className="heading-text bg-primary py-5 text-center text-md">{quote}</p>
      <p className="heading-text bg-primary py-3 text-center text-lg">
        <strong>{name}</strong>
      </p>
    </div>
  ) : (
    []
  );
};

export default gallery;
