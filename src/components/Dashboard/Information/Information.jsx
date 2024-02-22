import React from "react";
import "./style.css";
import revenues from '../../../assets/revenues.svg'
import totalUsers from '../../../assets/total-users.svg'
import likes from '../../../assets/likes.svg'
import transaction from '../../../assets/total_transactions_icon.svg'
const Information = () => {
  return (
    <div className="information-container">
      <div className="information-item">
        <div className="text">
          <span className="title">Total Revenues</span>
          <span className="data">$2,129,430</span>
        </div>
        <div className="icon">
        <img src={revenues} alt="" />
        </div>
      </div>
      <div className="information-item">
        <div className="text">
          <span className="title">Total Transactions</span>
          <span className="data">1,520</span>
          
        </div>
        <div className="icon">
        <img src={transaction} alt="" />
        </div>
      </div>
      <div className="information-item">
        <div className="text">
          <span className="title">Total Likes</span>
          <span className="data">9,721</span>
        </div>
        <div className="icon">
        <img src={likes} alt="" />
        </div>
      </div>
      <div className="information-item">
        <div className="text">
            
          <span className="title">Total Users</span>
          <span className="data">892</span>
        </div>
        <div className="icon">
        <img src={totalUsers} alt="" />
        </div>
        
      </div>
    </div>
  );
};
export default Information;
