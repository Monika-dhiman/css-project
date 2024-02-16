import React from 'react'
import "./style.css";
const Dashboard = () => {
  return (
    <div className='dashboard-side'>
      <div className="header-container">
        <p>DashBoard</p>
      </div>
      <div className="information-container">
        <p>Information</p>
      </div>
      <div className="graph-container">
        <p>Graph</p>
      </div>
      <div className="chart-container">
        <p>Chart</p>
      </div>
    </div>
  )
}
export default Dashboard;