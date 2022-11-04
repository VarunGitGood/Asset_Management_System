import React, { useEffect } from 'react'
import RecentStyles from '../style/Recent.module.css';
import { FetchData } from '../utils/REST';
import RecentBody from './RecentBody';
export default function Recent() {
    const [Log,setLog]=React.useState([]);
    async function getRecent()
    {
        try {
            const resu = await FetchData("/logs",false,null);
            setLog(resu.data.data);
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getRecent();
    }, [])
    const recent=Log.map((log)=>{
        return <RecentBody key={log._id} log={log} />
    })
  return (
    <div>
        <div className={RecentStyles.head}>
            <div className={RecentStyles.h}>Staff_Name</div>
            <div className={RecentStyles.h}>Asset_Id</div>
            <div className={RecentStyles.h}>Date</div>
            <div className={RecentStyles.h}>Desc</div>
        </div>
        {recent}
    </div>
  )
}
