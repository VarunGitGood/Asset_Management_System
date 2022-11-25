import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import RecentBodyStyles from "../style/RecentBody.module.css"
import {  postData } from '../utils/REST'
export default function RecentBody(props) {
  const [name,setName] = useState('')
  const date = props.log.log_date.slice(0,10)
  const fetchStaff = async (id) => {
    try {
      const result = await postData("/staffidrandom",false,null,{token:id})
      setName(result.data.data[0].staff_name)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchStaff(props.log.staff_id)
  },[])
  return (
    <div>
        <div className={RecentBodyStyles.body}>
            <div className={RecentBodyStyles.b}>{name}</div>
            <div className={RecentBodyStyles.b}>{date}</div>
            <div className={RecentBodyStyles.be}>{props.log.log_description}</div>
        </div>
    </div>
  )
}
