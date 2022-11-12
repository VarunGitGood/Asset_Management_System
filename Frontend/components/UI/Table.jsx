import React from "react";
import AssetCard from "./AssetCard";
import TableStyles from "../style/Table.module.css";
import { useParams } from "react-router-dom";
import { FetchData, postData, putData } from "../utils/REST";
import SideBar from "./SideBar";
import { Button } from "@mui/material";

export default function Table() {
  /// ###change this to secure###
  const token = window.localStorage.getItem("token");
  const { id } = useParams();
  const [Asst, setAsst] = React.useState([]);
  const title = id[0].toUpperCase() + id.slice(1);
  let flag = false;
  let formFlag = false;
  if (id == "assets") {
    flag = true;
  }
  async function getAsst() {
    try {
      const resu = await FetchData(`/${id}`);
      console.log(resu.data.data);
      setAsst(resu.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteHandler = async (id) => {
    try {
      const result = await postData(`/assets/${id}`, false, null, {
        staff_id: token,
      });
      console.log(result);
      getAsst();
    } catch (error) {
      console.log(error);
    }
  };

  const repairHandler = async (id) => {
    try {
      const result = await putData(`/repassets`, false, null, { asset_id: id });
      console.log(result);
      getAsst();
    } catch (error) {
      console.log(error);
    }
  };

  const countHandler = () => {
    getAsst()
  }
  React.useEffect(() => {
    getAsst();
  }, []);
  return (
    <div className={TableStyles.layout}>
      <SideBar />
      <div className={TableStyles.control}>
        <h1>{title}</h1>
        {flag && <Button variant="contained">Add New Asset</Button>}
      </div>
      <div className={TableStyles.container}>
        {Asst.map((asst) => {
          return (
            <AssetCard
              key={asst.asset_id}
              asset={asst}
              onDelete={deleteHandler}
              onRepair={repairHandler}
              onCount={countHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
