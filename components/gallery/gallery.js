import React from "react";
import styles from "./gallery.module.css";

const Gallery = (props) => {
  const { id, name, image, cardType, quote } = props;
  return cardType === "category" ? (
    <div className={`bg-primary my-2 cursor-pointer transition-all`}>
      <div>
        <div className="relative w-full " style={{ paddingTop: "" }}>
          <img src={image} alt={name} fill objectFit="cover" />
        </div>
        <div className=" text-center">
          <p className="heading-text text-lg p-5">{quote}</p>
          <p className="heading-text text-md p-5">
            <strong>{name}</strong>
          </p>
        </div>
      </div>
    </div>
  ) : (
    []
  );
};

export default Gallery;
