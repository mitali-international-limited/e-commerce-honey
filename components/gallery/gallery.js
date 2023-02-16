import React from "react";
import styles from "./gallery.module.css";

const gallery = (props) => {
  const { id, name, image, cardType, quote } = props;
  return cardType === "category" ? (
    <div
      className={`${styles.gallery} bg-primary cursor-pointer items-center justify-center transition-all shadow  hover:shadow-2xl`}
    >
      <div className=" ">
        <img src={image} />
      </div>
      <p className="heading-text py-5 bg-primary text-center">
        <strong>{name}</strong>
      </p>
      <p className="heading-text py-5 bg-primary text-center">{quote}</p>
    </div>
  ) : (
    []
  );
};

export default gallery;
