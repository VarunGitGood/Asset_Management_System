import React from 'react'
import RecentBodyStyles from "../style/RecentBody.module.css"
export default function RecentBody(props) {
  return (
    <div>
        <div className={RecentBodyStyles.body}>
            <div className={RecentBodyStyles.b}>{props.log.staff_id}</div>
            <div className={RecentBodyStyles.b}>{props.log.asset_id}</div>
            <div className={RecentBodyStyles.b}>{props.log.log_date}</div>
            <div className={RecentBodyStyles.b}>{props.log.log_description}</div>
        </div>
    </div>
  )
}
