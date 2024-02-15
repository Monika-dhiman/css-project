import React from "react";
import "./style.css";
import AppName from "../../components/LogIn/AppName";
import LogInSide from "../../components/LogIn/LogInSide";

export const LogIn = () => {
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
