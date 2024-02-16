import React from 'react'
import './style.css'
import google from '../../../assets/google.svg'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="sidebar-header">
        <p>Baord.</p>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item">
          <img src={google} alt="" /> 
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <img src={google} alt="" /> 
          <span>Transactions</span>
        </div>
        <Link to="" className="menu-item">
          <img src={google} alt="" /> 
          <span>Schedules</span>
        </Link>
        <div className="menu-item">
          <img src={google} alt="" /> 
          <span>Users</span>
        </div>
        <div className="menu-item">
          <img src={google} alt="" /> 
          <span>Settings</span>
        </div>
        </div>  
      <div className="sidebar-footer">
        <p>Help</p>
        <p>Contact</p>
      </div>
      
    </div>
  )
}
