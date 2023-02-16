import React, {useState} from "react";
import Gallery from "./gallery";
import categoryData from "../../utils/gallery-demo-data";

const gallerySection = () => {
  const [category, setCategory] = useState (categoryData)
  return (
    <section className="padding_inside">
      <h2 className="mb-0 ">Gallery</h2>
      <hr className="mx-0"/>
      <div className="m- p- grid grid-cols-2 items-center gap-3 justify-center md:grid-cols-2">
        {
          category.map((item, index) => {
            return (
              <Gallery
                key={index}
                name={item.name}
                image={item.image}
                quote={item.quote}
                cardType="category"
              />
            )
          })
        }
      </div>
    </section>
  );
};

export default gallerySection;
