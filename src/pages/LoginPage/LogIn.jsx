import React from "react";
import "./style.css";
import AppName from "../../components/LogIn/AppName";
import LogInSide from "../../components/LogIn/LogInSide";

const LogIn = () => {
  return (
    <div className="log-in-page">
      <div className="left-side">
        <AppName />
      </div>
      <div className="right-side">
        <LogInSide />
      </div>
    </div>
  );
};
export default LogIn;