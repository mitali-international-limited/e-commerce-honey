import React from "react";
import styles from "./card.module.css";
import Button from "../Button";
import Image from "next/image";

// import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();
// const imagesPath = publicRuntimeConfig.IMAGES_PATH;
const Card = (props) => {
  const { id, name, image, cardType, quote, quantity, price } = props;

  return (
    <>
      {cardType === "category" ? (
        <div
          className={`${styles.card} bg-primary my-2 cursor-pointer transition-all shadow  hover:shadow-2xl py-10`}
        >
          <div className=" ">
            <Image src={image} width="150" height="150" />
          </div>
          <p className="heading-text py-5 bg-primary text-center">
            <strong>{name}</strong>
          </p>
        </div>
      ) : (
        <div
          className={`${styles.product} h-300 w-200 bg-primary my-2 cursor-pointer transition-all shadow p-5`}
        >
          <div className=" h-300 w-200 container max-auto rounded transition-all overflow-hidden shadow-lg hover:shadow-2xl">
            <div className=" w-full shadow-lg">
              <img src={image} />
            </div>
            <div className=" pt-5">
              <p className="heading-text bg-primary text-center">
                <strong>{name}</strong>
              </p>
              <p className="heading-text bg-primary text-center">{quote}</p>
              <p className="heading-text bg-primary text-center">{quantity}</p>
              <p className="heading-text py-5 text-center mb-0 px-3">
                <strong>{price}</strong>
              </p>
              <div className="flex justify-between space-x-3">
                <Button className="bg-secondary w-full mx-0">Details</Button>
                <Button className="bg-secondary w-full mx-0">Cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
