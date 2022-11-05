import React from 'react'
import StatCardStyles from "../style/StatCard.module.css"
import { useNavigate } from "react-router-dom";
export default function StatCard({data}) {
  const nav = useNavigate()
  return (
    <div className={StatCardStyles.card} onClick={() => {
      nav(`/tables/${data.id}`)
    }}>
      <h2>{data.title}</h2>
    </div>
  )
}
