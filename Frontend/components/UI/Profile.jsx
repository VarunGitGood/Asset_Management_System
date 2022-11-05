import React from "react";
import SideBar from "./SideBar";
import s from "../style/Profile.module.css";
function Profile() {
  return (
    <div className={s.main}>
      <SideBar />

      <div>
        <img src='../../components/assets/back.jpg' alt='lamo'/>
      </div>
    </div>
  );
}

export default Profile;
