import React from "react";
import SideBar from "./SideBar";
import s from "../style/Profile.module.css";
function Profile() {
  return (
    <div className={s.main}>
      <SideBar />
    </div>
  );
}

export default Profile;
