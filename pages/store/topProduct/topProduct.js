import React from "react";

const Top = (props) => {
  const { id, name, image, cardType, quote, quantity, price, percentage } =
    props;

  return cardType === "category" ? (
    <div className={`my-2 cursor-pointer transition-all`}>
      
    </div>
  ) : (
    []
  );
};

export default Top;
