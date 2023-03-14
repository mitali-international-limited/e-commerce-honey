import Image from "next/image";
import React from "react";

const Hot = (props) => {
  const { id, price, image, cardType, quantity } = props;
  return (
    <>
      cardType === "category" && (
      <div className={`my-2 cursor-pointer transition-all`}>
        <div>
          <div className="relative w-full">
            <Image src={image} alt={id} fill cover />
          </div>
          <div className=" text-center">
            <p className="heading-text text-md p-2">
              <strong>{price}</strong>
            </p>
            <p className="heading-text text-lg p-2">{quantity}</p>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Hot;
