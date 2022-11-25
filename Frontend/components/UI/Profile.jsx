import React from "react";
import SideBar from "./SideBar";
import s from "../style/Profile.module.css";
import ProfileCard from "./ProfileCard";
import AssetForm from "./AssetForm";
import RepairForm from "./RepairForm";
import ProfileActivity from "./ProfileActivity";
function Profile() {
  return (
    <div className={s.main}>
      <SideBar />
      {/* <AssetForm />
      <RepairForm /> */}
      <ProfileCard />
      <ProfileActivity/>

    </div>
  );
}

export default Profile;
