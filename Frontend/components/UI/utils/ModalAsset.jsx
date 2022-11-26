import React from 'react'
import s from "../../style/OrderModal.module.css";
import AssetForm from '../AssetForm';

function ModalAsset(props) {
function closeHandler() {
        props.onClose();
    }
  return (
    <div className={s.back}>
      <div className={s.container}>
        <AssetForm onClose={closeHandler} geta={props.getA}/>
      </div>
    </div>
  )
}

export default ModalAsset