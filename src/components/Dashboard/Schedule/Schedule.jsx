import React from "react";
import "./style.css";
import arrowRight from "../../../assets/arrow-right.svg";
import Meeting from "../Meetings/Meeting";
const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <div className="title">
          <span>Today's schedule </span>
        </div>
        <div className="see-all">
            See All
        <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>
        <Meeting />
    </div>
  );
};
export default Schedule;
