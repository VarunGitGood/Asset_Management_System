import React, { useState } from "react";
import CardStyles from "../style/Card.module.css";
import { postData } from "../utils/REST";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import AlertDialogSlide from "./utils/Alert";


export default function AssetCard({ asset, onDelete, onRepair, onCount }) {
  const [value, setvalue] = useState(asset.count);
  const [alert, setAlert] = useState(false);
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

  const closeHandler = (data) => {
    if(data){
      onDelete(asset.asset_id);
    }
    setAlert(false);
  }

  return (
    <div className={CardStyles.card}>
      {alert && <AlertDialogSlide close={closeHandler}/>}
      <div className={CardStyles.control}>
        <div className={CardStyles.title}>{asset.comp_name}</div>
        <div className={CardStyles.bb}>
          <button
            onClick={() => {
              onRepair(asset.asset_id);
            }}
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </button>
          <button
            onClick={() => {
              setAlert(!alert);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        
      </div>
      <div className={CardStyles.data}>
        

        <p>Asset ID: {asset.asset_id}</p>
        <p>Model: {asset.model}</p>
        <p>Room: {asset.room_id}</p>
        <p>Cost: {asset.purchase_cost}</p>
        <p>Date: {asset.purchase_date.slice(0,10)}</p>
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
