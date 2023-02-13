import React from "react";
import styles from "./card.module.css";
import Button from "../Button";

const Card = (props) => {
  const { id, name, image, cardType, quote, quantity, price } = props;
  return (
    <>
      {cardType === "category" ? (
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
      ) : (
        <div
          className={`${styles.product} bg-primary my-2 cursor-pointer transition-all shadow p-5`}
        >
          <div class="container max-auto rounded transition-all overflow-hidden shadow-lg hover:shadow-2xl">
            <div class="h-auto max-w-auto shadow-lg">
              <img src={image} />
            </div>
            <div>
              <p className="heading-text bg-primary text-center">
                <strong>{name}</strong>
              </p>
              <p className="heading-text bg-primary text-center">{quote}</p>
              <p className="heading-text bg-primary text-center">{quantity}</p>
              <p className="bg-white heading-text py-5 text-center mb-0 px-3">
                <strong>{price}</strong>
              </p>
              <div className="flex justify-between">
              <Button className="bg-secondary w-full mx-2">Show Details</Button>
              <Button className="bg-secondary w-full mx-2">Cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
