import React from "react";
import styles from "./card.module.css";
import Button from "../Button";
import Image from "next/image";

import ReviewStar from "../Star";

// import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();
// const imagesPath = publicRuntimeConfig.IMAGES_PATH;
const Card = (props) => {
  const { id, name, image, cardType, quote, quantity, price } = props;

  return (
    <>
      {cardType === "category" ? (
        <div
          className={`${styles.card} my-2 cursor-pointer transition-all shadow  hover:shadow-2xl py-10`}
        >
          <a className="block">
            <div className="relative w-full" style={{ paddingTop: "75%" }}>
              <Image src={image} alt={name} fill objectFit="cover" />
            </div>
            <div className="pt-5 text-center">
              <p className="text-lg font-semibold">{name}</p>
            </div>
          </a>
        </div>
      ) : (
        <div className="h-300 w-200">
          <div className="block h-300 w-200 p-5 rounded transition-all cursor-pointer">
            <div className="relative w-full" style={{ paddingTop: "75%" }}>
              <Image src={image} alt={name} fill objectFit="cover" />
            </div>
            <div className=" pt-5">
              <div className="pb-2">
                <p className="text-lg text-secondary text-center">
                  <strong>{name}</strong>
                </p>

                {/* ratting section  */}
              </div>
              <p className="flex justify-around items-center px-3 pb-2">
                <strong className="bg-primary inline-block font-semibold line-through">
                  $330
                </strong>
                <strong className="bg-primary inline-block font-semibold">
                  {price}
                </strong>
              </p>
              <p className="text-sm md:text-lg">{quote}</p>
              <p className="text-center">{quantity}</p>
              <div className="flex justify-center">
                <ReviewStar />
              </div>
              <div className="text-center pt-5 underline text-tertiary">
                View
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
