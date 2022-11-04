import React from 'react'
import DashBoardbodyStyles from '../style/DashboardBody.module.css';
import Recent from './Recent';
import StatCard from './StatCard';
import DonutChart from './DonutChart';
export default function DashboardBody() {
  return (
    <div className={DashBoardbodyStyles.container}>
        <h1>Dashboard</h1>    
        <div className={DashBoardbodyStyles.statCards}>
            <StatCard/>
            <StatCard/>
            <StatCard/>
        </div>
        <div className={DashBoardbodyStyles.recent}>
            <Recent/>
        </div>
        <DonutChart/>
    </div>
  )
}
