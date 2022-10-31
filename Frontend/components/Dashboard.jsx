import React from 'react'
import SideBar from './SideBar'
import DashboardHeader from './DashboardHeader'
import DashboardStyles from './Dashboard.module.css';
import DashboardBody from './DashboardBody'
export default function Dashboard() {
  return (
    <div className={DashboardStyles.page}>
        <SideBar/>
        
        <div className={DashboardStyles.body}>
            <DashboardHeader/>
            <DashboardBody/>
        </div>
    </div>
  )
}
