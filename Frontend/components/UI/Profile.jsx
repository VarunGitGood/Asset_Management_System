import React from "react";
import SideBar from "./SideBar";
import s from "../style/Profile.module.css";
import AssetForm from "./AssetForm";
import RepairForm from "./RepairForm";
function Profile() {
  return (
    <div className={s.main}>
      <SideBar />
      <AssetForm />
      <RepairForm />
    </div>
  );
}

export default Profile;
