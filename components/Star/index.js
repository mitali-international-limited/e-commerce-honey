import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewStar = ({ className }) => {
  return (
    <div class={`${className}`}>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
    </div>
  );
};

export default ReviewStar;
