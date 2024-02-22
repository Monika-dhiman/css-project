import React from "react";
import "./style.css";
import searchIcon from "../../../assets/search.svg";
import notification from "../../../assets/notification.svg";
import porfileImg from "../../../assets/profile-image.svg";
const Header = () => {
  return (
    <div className="header-container">
      <span>Dashboard</span>
      <div className="right-container">
        <div className="search-container">
          <input type="search" placeholder="Search" />
          <img src={searchIcon} alt="" />
        </div>
        <img src={notification} height={"20px"} width={"18px"} alt="" />
        <img src={porfileImg} height={"30px"} width={"30px"}></img>
      </div>
    </div>
  );
};
export default Header;
