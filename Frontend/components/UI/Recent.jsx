import React, { useEffect } from "react";
import RecentStyles from "../style/Recent.module.css";
import { FetchData } from "../utils/REST";
import RecentBody from "./RecentBody";

export default function Recent(props) {
  const [Log, setLog] = React.useState([]);
  async function getRecent() {
    try {
      const resu = await FetchData(`/${props.path}`, false, null);
      let data = resu.data.data.reverse();
      data = data.slice(0, 8);
      setLog(data);
    } catch (error) {}
  }
  useEffect(() => {
    getRecent();
  }, []);
  return (
    <div className={RecentStyles.reccontain}>
      <div className={RecentStyles.head}>
        <div className={RecentStyles.h}>Staff_Name</div>
        <div className={RecentStyles.h}>Asset_Id</div>
        <div className={RecentStyles.h}>Date</div>
        <div className={RecentStyles.h}>Description</div>
      </div>
      {Log.map((log) => {
        return <RecentBody key={log._id} log={log} />;
      })}
    </div>
  );
}
