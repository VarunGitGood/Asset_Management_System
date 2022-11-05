import React from 'react'
import StatCardStyles from "../style/StatCard.module.css"
export default function StatCard(props) {
  return (
    <div className={StatCardStyles.card}>
      Stat
      <p>title</p>
    </div>
  )
}
