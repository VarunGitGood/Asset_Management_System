import React from 'react'
import DashBoardbodyStyles from '../style/DashboardBody.module.css';
import Recent from './Recent';
import StatCard from './StatCard';
import Table from './Table';
export default function DashboardBody() {
  
  const data = [
    {title:'Assets',id:'assets'},
    {title:'Misc',id:'misc'},
    {title:'Computer',id:'computers'}
    // {title:'repairs',id:'misc'}

  ]
  return (
    <div className={DashBoardbodyStyles.container}>
        <h1>Dashboard</h1>    
        <div className={DashBoardbodyStyles.statCards}>
            {data.map((i) => {
                return <StatCard data={i} key={i}/>
            })}
        </div>
        <div className={DashBoardbodyStyles.recent}>
            <Recent path="logs"/>
        </div>
    </div>
  )
}
