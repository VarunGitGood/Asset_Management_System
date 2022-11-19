import React from "react";
import StatCardStyles from "../style/StatCard.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
export default function StatCard({ data }) {
  const nav = useNavigate();
  var icon;
  switch (data.id) {
    case "assets":
      icon = <FontAwesomeIcon icon={faWarehouse} size="2x" />;
      break;
    case "misc":
      icon = <FontAwesomeIcon icon={faBars} size="2x"/>;
      break;
    case "computers":
      icon = <FontAwesomeIcon icon={faDesktop} size="2x"/>;
      break;
    case "repassets":
      icon = <FontAwesomeIcon icon={faTools} size="2x"/>;
      break;
    default:
      break;
  }

  return (
    <div
      className={StatCardStyles.card}
      onClick={() => {
        nav(`/tables/${data.id}`);
      }}
    >
        <div className={StatCardStyles.icon}>{icon}</div>
        <div className={StatCardStyles.text}>
          <h2>{data.title}</h2>
          <h1>{data.count}</h1>
        </div>


    </div>
  );
}
