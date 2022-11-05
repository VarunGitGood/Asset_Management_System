import React from 'react'
import SideBar from '../UI/SideBar'
import DashboardStyles from '../style/Dashboard.module.css';
import DashboardBody from '../UI/DashboardBody'
export default function Dashboard() {
  return (
    <div className={DashboardStyles.page}>
        <SideBar/>
        <DashboardBody/>
    </div>
  )
}
