import React from 'react'
import SideBar from './SideBar'
import s from '../style/Repairs.module.css'
import RepairForm from './RepairForm'

function Repairs() {
  return (
    <div className={s.layout}>
      <SideBar />
      <div className={s.main}>
        <h1>Repairs</h1>
        <div className={s.control}>
          <div className={s.form}>
            <RepairForm />
          </div>
          <div className={s.remove}>li</div>
        </div>
      </div>
    </div>
  )
}

export default Repairs