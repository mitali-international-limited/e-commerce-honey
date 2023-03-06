import React from "react";

const Weekly = (props) => {
  const { id, price, image, cardType, quantity } = props;
  return cardType === "category" ? (
    <div className={`my-2 cursor-pointer transition-all`}>
      <div>
        <div className="relative w-full">
          <img src={image} alt={image} fill objectFit="cover" />
        </div>
        <div className=" text-center">
          <p className="heading-text text-md p-2">
            <strong>{price}</strong>
          </p>
          <p className="heading-text text-lg p-2">{quantity}</p>
        </div>
      </div>
    </div>
  ) : (
    []
  );
};

export default Weekly;
