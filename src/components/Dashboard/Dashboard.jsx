import React from 'react'
import "./style.css";
import Header from './Header/Header';
import Information from './Information/Information';
import ActivitiesChart from '../Charts/ActivitiesChart';
const Dashboard = () => {
  return (
    <div className='dashboard-side'>
        <Header />
        <Information />
      <div className="graph-container">
        <ActivitiesChart />
      </div>
      <div className="chart-container">
        <p>Chart</p>
      </div>
    </div>
  )
}
export default Dashboard;