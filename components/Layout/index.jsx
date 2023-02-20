import React from "react";

import Header from "../Header";
// import ImageSlider from '../ImageSlider';
import Footer from "../Footer";
import BottomMenu from "../Bottom-menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <BottomMenu />
      <Footer />
    </div>
  );
};

export default Layout;
