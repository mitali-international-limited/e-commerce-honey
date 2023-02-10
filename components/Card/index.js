import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const { id, name, image } = props;
  return (
    <div
      className={`${styles.card} bg-primary my-2 cursor-pointer transition-all shadow  hover:shadow-2xl py-10`}
    >
      <div className=" ">
        <img src={image} />
      </div>
      <p className="heading-text py-5 bg-primary text-center">
        <strong>{name}</strong>
      </p>
    </div>
  );
};

export default Card;
