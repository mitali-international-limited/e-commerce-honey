import React, { useState } from "react";
import Gallery from "../gallery";
import Card from "../Card";

import productData from "../../utils/products-demo";
import CommonCard from "../CommonCard";

import Photo1 from "../../public/Products/Gold Honey/Gold Honey(6).jpeg";
import Photo2 from "../../public/Products/Black Bull/Black Bull(4).jpeg";
import Photo3 from "../../public/Products/Vip Honey/VIP Honey.jpeg";
import Photo4 from "../../public/Products/Vitmax/Vitamax Double shot.jpeg";
import Photo5 from "../../public/Products/Leoard Honey/Leopard Miracle(1).jpeg";
import Photo6 from "../../public/Products/Leoard Honey/Leopard Honey(3).jpg";
import Photo7 from "../../public/Products/G3A/_G3A5134 (2).jpg";
import Photo8 from "../../public/Products/Extumax Honey/Etumax Honey(5).jpeg";

const RecommendProduct = () => {
  const [product, setProduct] = useState(productData);
  return (
    <section className="padding_inside relative top-36 md:top-48">
      <h2 className="mb-0 ">JUST FOR YOU</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <CommonCard image={Photo1} percentage={"Hot"} />
        <CommonCard image={Photo2} percentage={"Hot"} />
        <CommonCard image={Photo3} percentage={"Hot"} />
        <CommonCard image={Photo4} percentage={"Hot"} />
        <CommonCard image={Photo5} percentage={"Hot"} />
        <CommonCard image={Photo6} percentage={"Hot"} />
        <CommonCard image={Photo7} percentage={"Hot"} />
        <CommonCard image={Photo8} percentage={"Hot"} />
      </div>
    </section>
  );
};

export default RecommendProduct;
