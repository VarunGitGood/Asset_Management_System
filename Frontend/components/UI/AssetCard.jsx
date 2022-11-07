import React from 'react'
import CardStyles from '../style/Card.module.css'
export default function AssetCard({asset}) {
    
  return (
    <div className={CardStyles.card}>
        <h1>{asset.comp_name}</h1>
        <p>Asset ID: {asset.asset_id}</p>
        <p>Model: {asset.model}</p>
        <p>Room: {asset.room_id}</p>
        <p>Cost: {asset.purchase_cost}</p>
        <p>Date: {asset.purchase_date}</p>
    </div>
  )
}
