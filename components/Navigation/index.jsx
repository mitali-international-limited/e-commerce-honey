import React from "react";

const Navigation = () => {
  return (
    <nav className="my-auto mx-0">
      <ul className="flex justify-around font-semibold p-5 items-center h-full">
        <li>
          <a href="/" className="">
            <span>Honey</span>
          </a>
        </li>
        <li>
          <a href="/" className="">
            <span>Male Enhancement</span>
          </a>
        </li>
        <li>
          <a href="/" className="">
            <span>Female Enhancement</span>
          </a>
        </li>
        <li>
          <a href="/" className="">
            <span>Rolling Paper</span>
          </a>
        </li>
        <li>
          <a href="/" className="">
            <span>Condoms</span>
          </a>
        </li>
        <li>
          <a href="/" className="">
            <span>Pills</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
