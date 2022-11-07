import React, { useState } from "react";
import CardStyles from "../style/Card.module.css";
import { postData } from "../utils/REST";
export default function AssetCard({ asset, onDelete, onRepair, onCount }) {
  const [value, setvalue] = useState(asset.count);
  let count = asset.count;

  const add = async (amt) => {
    try {
      const res = await postData(`/inc/${asset.asset_id}`, false, null, {
        asset_id: asset.asset_id,
        amount: amt,
      });
      console.log(res);
      onCount();
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (amt) => {
    try {
      const res = await postData(`/dec/${asset.asset_id}`, false, null, {
        count,
        amount: amt,
      });
      console.log(res);
      onCount();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.control}>
        <button
          onClick={() => {
            onRepair(asset.asset_id);
          }}
        >
          Send For repair
        </button>
        <button
          onClick={() => {
            onDelete(asset.asset_id);
          }}
        >
          Delete
        </button>
      </div>
      <div className={CardStyles.data}>
        <h1>{asset.comp_name}</h1>
        <p>Asset ID: {asset.asset_id}</p>
        <p>Model: {asset.model}</p>
        <p>Room: {asset.room_id}</p>
        <p>Cost: {asset.purchase_cost}</p>
        <p>Date: {asset.purchase_date}</p>
      </div>
      <div>
        Count: {count}
        <input
          type="number"
          min={1}
          max={1000}
          label="Amount"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            remove(value);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            add(value);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
