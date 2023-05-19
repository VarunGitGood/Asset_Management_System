import React from "react";
import rcs from "../style/RoomCard.module.css";
import { useNavigate } from "react-router-dom";
export default function RoomCard(props) {
  const id = props.data.room_id;
  const nav = useNavigate();
  return (
    <div className={rcs.card}>
      <h2>Room: {id}</h2>
      <div className={rcs.b}>
        <button
          onClick={() => {
            props.deleteRoom(id);
          }}
        >
          Remove
        </button>
        <button
          onClick={() => {
            nav(`/rooms/${id}`);
          }}
        >
          View More
        </button>

      </div>
      
    </div>
  );
}
