import React from 'react'
import SideBar from '../UI/SideBar'
import DashboardHeader from "../UI/DashboardHeader"
import DashboardStyles from '../style/Dashboard.module.css';
import DashboardBody from '../UI/DashboardBody'
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
