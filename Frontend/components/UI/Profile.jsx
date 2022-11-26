import React from "react";
import SideBar from "./SideBar";
import s from "../style/Profile.module.css";
import ProfileCard from "./ProfileCard";
import ProfileActivity from "./ProfileActivity";


function Profile() {

  
  return (
    <div className={s.main}>
      <SideBar />
      <div className={s.profile}>
      <ProfileCard />
      <ProfileActivity/>
      </div>

    </div>
  );
}

export default Profile;
