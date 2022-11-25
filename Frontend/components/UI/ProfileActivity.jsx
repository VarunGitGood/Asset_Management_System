import React from 'react'
import pa from '../style/ProfileActivity.module.css'
import { FetchData } from "../utils/REST";
import { AuthContext } from "../context/authContext";

export default function ProfileActivity() {

    const [log, setLog] = React.useState([]);
    const auth = React.useContext(AuthContext);
    const id=auth.user.data[0].staff_id;
    console.log(id)
    const fetch = async () => {
      try {
        const res = await FetchData(`/staffactivity/${id}`);
        setLog(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

      React.useEffect(() => {
        fetch();
      }, []);
  
  return (
    <div className={pa.card}>
        <div className={pa.head}><h1 className={pa.hh}>Activity Status</h1></div>
        {log.map((item) => (
          <div className={pa.log}>
            <div className={pa.log1}>
              <h1 className={pa.h1}>{item.activity}</h1>
              <h1 className={pa.h2}>{item.date}</h1>
          </div>
          </div>
        ))}
    </div>
  )
}
