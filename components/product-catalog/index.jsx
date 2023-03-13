import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus, FaCaretDown } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Button from "../Button";
import ReviewStar from "../Star/index";
import Image from "next/image";

import { SiShopify } from "react-icons/si";
import { HiOutlinePlusCircle } from "react-icons/hi2";

import photo from "../../public/Products/Gold Honey/Gold Honey(3).jpeg";
import photo2 from "../../public/Products/Gold Honey/Gold Honey(2).jpeg";
import photo3 from "../../public/Products/Gold Honey/Gold Honey(5).jpeg";
import photo4 from "../../public/Products/Gold Honey/Gold Honey(7).jpeg";
import photo5 from "../../public/Products/Gold Honey/Gold Honey.jpeg";
import LeftRightArrow from "../common/LeftRightArrow";

const ProductCatalog = () => {
  const [index, setIndex] = useState(0);

  const image = [photo, photo2, photo3, photo4, photo5];

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  return (
    <section className="relative container top-2 bg-white">
      <div className="lg:w-4/5 flex flex-wrap">
        <div className="relative md:pt-5 lg:w-1/2 w-screen lg:h-1/2   rounded flex flex-col justify-center items-center">
          <div
            className={`relative w-full h-80  flex justify-center items-center`}
          >
            {image.map((pic, picIndex) => {
              let position = "nextSlide";
              if (picIndex === index) {
                position = "activeSlide";
              }
              if (
                picIndex === index - 1 ||
                (index === 0 && picIndex === image.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={`${position}`}>
                  <Image src={pic} fill cover />
                </article>
              );
            })}
            <LeftRightArrow setIndex={setIndex} index={index} />
          </div>

          <div className="h-44 flex flex-nowrap scroll-smooth x-scrollable-content">
            {image.map((pic, picIndex) => {
              return (
                <div key={picIndex} className="relative w-40 h-full ">
                  <Image src={pic} fill cover />
                </div>
              );
            })}
          </div>
        </div>
        {/* Product Information and button */}
        <div className="padding_inside w-full space-y-3">
          <h3 className="text-3xl font-medium">Royal Honey VIP 20g Sachet</h3>
          <div className="mb-2">
            <span className="flex items-center">
              <ReviewStar className={`flex text-honey`} />
              <span span className="text-gray-600 ml-3">
                4 Reviews
              </span>
            </span>
          </div>
          <div>
            <p className="text-lg font-bold tracking-widest ">
              12 Sachet Per Box, 48 Box Per Carton
            </p>
            <p className=" font-extrabold text-2xl py-4 title-font tracking-widest">
              $27
            </p>
            <p className="leading-relaxed ml-5 text-lg text-gray">
              <ul className="list-disc">
                <li>100% Organic Formula </li>
                <li>Sugar & Caffeine FREE</li>
                <li>100% Authentic</li>
                <li>Top Quality Guarantee</li>
                <li>Fast Free Shipping From The US</li>
              </ul>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Button className=" text-white bg-honey hover:text-white hover:bg-honey rounded-full shadow-hnx">
              <span className="flex space-x-3 items-center">
                <span>
                  <HiOutlinePlusCircle />
                </span>
                <span>Add to Cart</span>
              </span>
            </Button>
            <Button className="text-black bg-primary hover:text-white hover:bg-honey rounded-full shadow-hnx">
              {/* <AiFillHeart/> */}
              <span className="flex space-x-3 items-center">
                <span>
                  <SiShopify />
                </span>
                <span>Buy Now</span>
              </span>
            </Button>
            <Button className="text-primary text-xl bg-secondary hover:text-white hover:bg-honey rounded-full shadow-hnx">
              <AiFillHeart />
            </Button>
          </div>
          <div className="flex items-center py-2 border-gray border-b-2"></div>
          {/*end Product Information and button */}
          {/**Product Description and */}
          <div>
            <p className="text-lg title-font tracking-widest">
              Availability:
              <span className="text-bold text-secondary"> In Stock</span>
            </p>
            <p className="text-lg title-font tracking-widest">
              Category:
              <span className="text-bold text-secondary">
                {" "}
                Male Enhancement
              </span>
            </p>
            <p className="text-lg title-font tracking-widest">
              Brand:
              <span className="text-bold text-secondary">
                {" "}
                Royal Honey, Malaishia
              </span>
            </p>
          </div>
          <div>
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <h3>Product Details</h3>
                <FaCaretDown />
              </div>
              <p className="leading-relaxed ml-5 text-lg ">
                <span className="text-2xl">
                  Royal Honey For Men – Gold (12 Sachets – 20 G)
                </span>
                <ul className="list-disc">
                  <li>
                    <span className="text-lg font-bold">
                      Sexual Stimulant<span> - </span>
                      <span className="font-light text-ash">
                        Get the most out of your orgasms. Royal honey increases
                        arousal, physical pleasure, and leads to a more intense
                        climax every time.
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Fast Acting & Long Lasting<span> - </span>
                      <span className="font-light text-ash">
                        With the Pink Pussycat, less is more. One sachet will
                        give you the results you want for longer than you might
                        expect; sensations last up to 72 hours!
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Better Lubrication<span> - </span>
                      <span className="font-light text-ash">
                        Royal honey promotes natural vaginal lubrication to
                        ensure comfort and pleasure.
                      </span>
                    </span>
                  </li>
                </ul>
              </p>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <h3 className="mb-0">Additional Information </h3>
                <FaCaretDown />
              </div>
              <p className="hidden leading-relaxed ml-5 text-lg ">
                <span className="text-2xl">
                  Royal Honey For Men – Gold (12 Sachets – 20 G)
                </span>
                <ul className="list-disc">
                  <li>
                    <span className="text-lg font-bold">
                      Sexual Stimulant<span> - </span>
                      <span className="font-light text-ash">
                        Get the most out of your orgasms. Royal honey increases
                        arousal, physical pleasure, and leads to a more intense
                        climax every time.
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Fast Acting & Long Lasting<span> - </span>
                      <span className="font-light text-ash">
                        With the Pink Pussycat, less is more. One sachet will
                        give you the results you want for longer than you might
                        expect; sensations last up to 72 hours!
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Better Lubrication<span> - </span>
                      <span className="font-light text-ash">
                        Royal honey promotes natural vaginal lubrication to
                        ensure comfort and pleasure.
                      </span>
                    </span>
                  </li>
                </ul>
              </p>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <h3 className="mb-0">Specification </h3>
                <FaCaretDown />
              </div>
              <p className="hidden leading-relaxed ml-5 text-lg ">
                <span className="text-2xl">
                  Royal Honey For Men – Gold (12 Sachets – 20 G)
                </span>
                <ul className="list-disc">
                  <li>
                    <span className="text-lg font-bold">
                      Sexual Stimulant<span> - </span>
                      <span className="font-light text-ash">
                        Get the most out of your orgasms. Royal honey increases
                        arousal, physical pleasure, and leads to a more intense
                        climax every time.
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Fast Acting & Long Lasting<span> - </span>
                      <span className="font-light text-ash">
                        With the Pink Pussycat, less is more. One sachet will
                        give you the results you want for longer than you might
                        expect; sensations last up to 72 hours!
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Better Lubrication<span> - </span>
                      <span className="font-light text-ash">
                        Royal honey promotes natural vaginal lubrication to
                        ensure comfort and pleasure.
                      </span>
                    </span>
                  </li>
                </ul>
              </p>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <h3 className="mb-0">Shipping Details </h3>
                <FaCaretDown />
              </div>
              <p className="hidden leading-relaxed ml-5 text-lg ">
                <span className="text-2xl">
                  Royal Honey For Men – Gold (12 Sachets – 20 G)
                </span>
                <ul className="list-disc">
                  <li>
                    <span className="text-lg font-bold">
                      Sexual Stimulant<span> - </span>
                      <span className="font-light text-ash">
                        Get the most out of your orgasms. Royal honey increases
                        arousal, physical pleasure, and leads to a more intense
                        climax every time.
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Fast Acting & Long Lasting<span> - </span>
                      <span className="font-light text-ash">
                        With the Pink Pussycat, less is more. One sachet will
                        give you the results you want for longer than you might
                        expect; sensations last up to 72 hours!
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">
                      Better Lubrication<span> - </span>
                      <span className="font-light text-ash">
                        Royal honey promotes natural vaginal lubrication to
                        ensure comfort and pleasure.
                      </span>
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
