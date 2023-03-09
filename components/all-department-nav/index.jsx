import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import styles from "./department-nav.module.css";
import { TiArrowSortedDown } from "react-icons/ti";
import LeftSection from "../heroSlider/leftSection";

const AllDepartNav = () => {
  const { isDepartmentOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <>
      {
      isDepartmentOpen && 

      <div className="w-1/5">
          <LeftSection/>
        </div>
  
     }
    </>
  )
}

export default AllDepartNav;