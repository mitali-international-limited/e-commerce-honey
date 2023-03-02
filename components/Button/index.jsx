import React from "react";

const Button = ({ children, onClick, className = "" }) => (
  <button
    className={` font-bold py-4 px-8 rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
