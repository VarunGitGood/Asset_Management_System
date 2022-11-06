import React from "react";
import { useNavigate } from "react-router-dom";
import SideBarStyles from "../style/SIdeBar.module.css";
import Logout from "../utils/Logout";

export default function SideBar() {
  const nav = useNavigate();
  return (
    <>
      <div className={SideBarStyles.sidebar}>
        <div
          className={SideBarStyles.header}
          onClick={() => {
            nav("/dashboard");
          }}
        >
          <h1>ASM</h1>
        </div>
        <div
          className={SideBarStyles.card}
          onClick={() => {
            nav("/profile");
          }}
        >
          Profile
        </div>
        <div
          className={SideBarStyles.card}
          onClick={() => {
            nav("/rooms");
          }}
        >
          Rooms
        </div>
        <div
          className={SideBarStyles.card}
          onClick={() => {
            nav("/repairs");
          }}
        >
          Repairs
        </div>

        <Logout />
      </div>
    </>
  );
}
