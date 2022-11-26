import React, { useContext } from "react";
import AssetCard from "./AssetCard";
import TableStyles from "../style/Table.module.css";
import { useParams } from "react-router-dom";
import { FetchData, postData, putData } from "../utils/REST";
import SideBar from "./SideBar";
import ModalAsset from "./utils/ModalAsset";
import { AuthContext } from "../context/authContext";

export default function Table() {
  /// ###change this to secure###
  const auth = useContext(AuthContext);
  const staff = auth.user.data[0].staff_id;
  const { id } = useParams();
  const [Asst, setAsst] = React.useState([]);
  const title = id[0].toUpperCase() + id.slice(1);
  let flag = false;
  const [modal, setModal] = React.useState(false);
  function openModal()
  {
    setModal(true);
  }
  if (id == "assets") {
    flag = true;
  }

  function closeHandler()
  {
    setModal(false);
  }
  async function getAsst() {
    try {
      const resu = await FetchData(`/${id}`);
      setAsst(resu.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteHandler = async (id) => {
    try {
      const result = await postData(`/assets/${id}`, false, null, {
        staff_id: staff
      });
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
      <div className={TableStyles.table}>
        {(modal)?<ModalAsset onClose={closeHandler} getA={getAsst}/>:null}
        <div className={TableStyles.control}>
          <h1>{title}</h1>
          {flag && <button onClick={openModal} variant="contained">Add New Asset</button>}
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
    </div>
  );
}
