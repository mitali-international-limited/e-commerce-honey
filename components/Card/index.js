import React from "react";
import styles from "./card.module.css";
import Button from "../Button";
import Image from "next/image";

import ReviewStar from "../Star";
import OfferPercent from "../offer";

const Card = (props) => {
  const { id, name, image, cardType, quote, quantity, price, percentage } =
    props;

  return (
    <>
      {cardType === "category" ? (
        <div
          className={`${styles.card} my-2 cursor-pointer transition-all shadow-hnx  `}
        >
          <a className="w-full h-full">
            <div className="relative w-full h-3/4 transition-all duration-500 hover:scale-110">
              <Image src={image} alt={name} fill cover />
            </div>
          </a>
          <div className="pt-5 text-center">
            <p className="text-xl font-semibold">{name}</p>
          </div>
        </div>
      ) : (
        <div className="h-300 w-200">
          <div className="relative h-300 w-200 p-5 rounded  cursor-pointer">
            <div
              className="relative w-full transition-all transform hover:scale-125"
              style={{ paddingTop: "75%" }}
            >
              <Image src={image} alt={name} fill objectFit="cover" />
            </div>
            {percentage && (
              <div className={`${styles.percentage}`}>
                <OfferPercent percentage={percentage} />
              </div>
            )}

            <div className=" pt-5">
              <div className="pb-2">
                <p className="text-lg text-secondary text-center">
                  <strong>{name}</strong>
                </p>

                {/* ratting section  */}
              </div>
              <p className="flex justify-between items-center px-8 pb-2">
                <strong className="bg-primary inline-block font-semibold line-through">
                  $330
                </strong>
                <strong className="bg-primary inline-block font-semibold">
                  {price}
                </strong>
              </p>
              <p className="text-sm text-center md:text-lg">{quote}</p>
              <p className="text-center">{quantity}</p>
              <div className="flex justify-center">
                <ReviewStar />
              </div>
              {/* <div className="text-center pt-5 underline text-tertiary">
                View
              </div> */}
              <div className={`${styles.slider_content} flex justify-center`}>
                <Button className="bg-secondary text-primary hover:bg-honey hover:text-black">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
