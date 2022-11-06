import React from "react";
import AssetCard from "./AssetCard";
import TableStyles from "../style/Table.module.css";
import { useParams } from "react-router-dom";
import { FetchData } from "../utils/REST";
import SideBar from "./SideBar";

export default function Table() {
  const { id } = useParams();
  const [Asst, setAsst] = React.useState([]);

  async function getAsst() {
    try {
      const resu = await FetchData(`/${id}`);
      console.log(resu.data.data);
      setAsst(resu.data.data);
    } catch (error) {}
  }
  React.useEffect(() => {
    getAsst();
  }, []);


    
    
    tab=Asst.map((asst)=>{
        return <AssetCard key={asst._id} asset={asst} />
    })
    console.log(Asst);
  return (
    <div className={TableStyles.layout}>
      <SideBar />
      <div className={TableStyles.container}>
        {Asst.map((asst) => {
          return <AssetCard key={asst.asset_id} asset={asst} />;
        })}
      </div>
    </div>
  );
}
