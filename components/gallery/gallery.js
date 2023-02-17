import React from "react";
import styles from "./gallery.module.css";

const gallery = (props) => {
  const { id, name, image, cardType, quote } = props;
  return cardType === "category" ? (
    <div
      className={`${styles.gallery} bg-primary my-2 cursor-pointer transition-all`}
    >
      <a className="block">
        <div className="relative w-full " style={{ paddingTop: "" }}>
          <img src={image} alt={name} fill objectFit="cover" />
        </div>
        <div className="pt-5 text-center">
          <p className="heading-text text-lg p-5">{quote}</p>
          <p className="heading-text text-md p-5">
            <strong>{name}</strong>
          </p>
        </div>
      </a>
    </div>
  ) : (
    []
  );
};

export default gallery;
