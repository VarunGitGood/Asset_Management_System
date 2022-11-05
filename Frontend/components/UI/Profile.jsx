import React from "react";
import SideBar from "./SideBar";
import s from "../style/Profile.module.css";
import AssetForm from "./AssetForm";
function Profile() {
  return (
    <div className={s.main}>
      <SideBar />
      <AssetForm />
    </div>
  );
}

export default Profile;
