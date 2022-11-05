import React from 'react'
import StatCardStyles from "../style/StatCard.module.css"
export default function RoomCard(props) {
  const id = props.data.room_id
  return (
    <div className={StatCardStyles.card}>
      <button onClick={() => {
        props.deleteRoom(id)
      }}>Remove</button>
        <h2>Room: {id}</h2>
    </div>
  )
}
