import React from 'react'
import './style.css'
import Dashboard from '../components/Dashboard/Dashboard';
import { Sidebar } from '../components/Dashboard/Sidebar/Sidebar';
const DashboardPage = () => {
  return (
    <div className='dashboard-page'>
      <div>
        <Sidebar />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  )
}
export default DashboardPage;