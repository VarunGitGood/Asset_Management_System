import React from "react";
import SideBar from "./SideBar";
import s from "../style/Repairs.module.css";
import RepairForm from "./RepairForm";
import { FetchData, putData } from "../utils/REST";
import { useEffect } from "react";
import AssetCard from "./AssetCard";

function Repairs() {
  const [repairs, setRepairs] = React.useState([]);

  const fetch = async () => {
    try {
      const res = await FetchData("/repassets");
      setRepairs(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const updateRepair = async (id) => {
    try {
      const res = await putData(`/update/${id}`);
      setRepairs(res.data.data);
      fetch()
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className={s.layout}>
      <SideBar />
      <h1>Repairs</h1>
      {/* <div className={s.control}>
          <div className={s.remove}>li</div>
        </div> */}
      <div className={s.main}>
        {repairs && repairs.map((repair) => {
          return <div><AssetCard key={repair.asset_id} asset={repair} /><button onClick={() => {
            updateRepair(repair.asset_id);
          }}>Repair Done</button></div>;
        })}
      </div>
    </div>
  );
}

export default Repairs;
