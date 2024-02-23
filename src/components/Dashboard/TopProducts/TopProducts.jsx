import React from "react";
import PieChart from "../../Charts/PieChart";
import "./style.css";
import arrowDown from "../../../assets/arrow-down.svg";
const TopProducts = () => {
  return (
   
      <div className="top-products-container">
        <div className="top-products-header">
        <span className="title">Top products</span>
        <div className="date">
        <p>May - June 2021</p>
        <img src={arrowDown} alt="arrow-down" />
        </div>
        </div>
          <PieChart />
    </div>
  );
};
export default TopProducts;
