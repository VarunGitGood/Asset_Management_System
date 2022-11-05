import React from 'react'
import StatCardStyles from "../style/StatCard.module.css"
import { useNavigate } from "react-router-dom";
export default function RoomCard(props) {
  const id = props.data.room_id
  const nav = useNavigate()
  return (
    <div className={StatCardStyles.card}>
      <button onClick={() => {
        props.deleteRoom(id)
      }}>Remove</button>
      <button onClick={() => {
        nav(`/rooms/${id}`)
      }}>View More</button>
        <h2>Room: {id}</h2>
    </div>
  )
}
