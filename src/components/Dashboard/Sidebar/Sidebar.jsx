import React from 'react'
import './style.css'
import user from '../../../assets/user.svg'
import dashboard from '../../../assets/dashboard.svg'
import schedule from '../../../assets/schedule.svg'
import transaction from '../../../assets/transaction.svg'
import setting from '../../../assets/setting.svg'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  
  return (
    <div className='sidebar-container'>
      <div className="sidebar-header">
        <p>Baord.</p>
      </div>
      <div className="sidebar-menu">
        
        <Link to="/" className="menu-item">
          <img src={dashboard} alt="" /> 
          <span>Dashboard</span>
        </Link>
        <Link to="/" className="menu-item">
          <img src={transaction} alt="" /> 
          <span>Transactions</span>
        </Link>
        <Link to="/" className="menu-item">
          <img src={schedule} alt="" /> 
          <span>Schedules</span>
        </Link>
        <Link to="/" className="menu-item">
          <img src={user} alt="" /> 
          <span>Users</span>
        </Link>
        <Link to="/" className="menu-item">
          <img src={setting} alt="" /> 
          <span>Settings</span>
        </Link>
        </div>  
      <div className="sidebar-footer">
        <p>Help</p>
        <p>Contact</p>
      </div>
      
    </div>
  )
}
