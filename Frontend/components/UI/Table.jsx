import React from "react";
import AssetCard from "./AssetCard";
import TableStyles from "../style/Table.module.css";
import { useParams } from "react-router-dom";
import { FetchData } from "../utils/REST";
import SideBar from "./SideBar";

export default function Table() {
  const { id } = useParams();
  const [Asst, setAsst] = React.useState([]);
  let tab;
  async function getAsst() {
    try {
      const resu = await FetchData(`/${id}`, false, null);
      console.log(resu.data.data);
      setAsst(resu.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  React.useEffect(() => {
    getAsst();
  }, []);

  tab = Asst.map((asset) => {
    return <AssetCard key={asset.asset_id} asset={asset} />;
  });

  console.log(Asst);
  return (
    <div className={TableStyles.layout}>
      <SideBar />
      <div className={TableStyles.container}>{tab}</div>
    </div>
  );
}
