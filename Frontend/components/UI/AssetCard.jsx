import React from 'react'
import CardStyles from '../style/Card.module.css'
export default function AssetCard(props) {
    console.log(props.asst);
  return (
    <div className={CardStyles.container}>
        <h1>{props.asst.comp_name}</h1>
        <p>Model: {props.asst.model}</p>
        <p>Room: {props.asst.room_id}</p>
        <p>Cost: {props.asst.purchase_cost}</p>
        <p>Date: {props.asst.purchase_date}</p>
    </div>
  )
}
