import React from 'react'
import s from "../../style/OrderModal.module.css";
import RepairForm from '../AssetForm';

function ModalRep(props) {
    // form ke liye
    function closeHandler() {
        props.onClose();
    }
  return (
    <div className={s.back}>
      <div className={s.container}>
        <RepairForm onClose={closeHandler} geta={props.getA}/>
      </div>
    </div>
  )
}

export default ModalRep