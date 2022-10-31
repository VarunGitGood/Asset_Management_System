import React from 'react'
import DashBoardbodyStyles from './DashboardBody.module.css';
import DonutChart from './DonutChart';
export default function DashboardBody() {
  return (
    <div className={DashBoardbodyStyles.container}>
        <h1>Dashboard</h1>
        <DonutChart/>
    </div>
  )
}
