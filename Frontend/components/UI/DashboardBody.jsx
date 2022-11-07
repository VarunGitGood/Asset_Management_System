import React, { useEffect } from "react";
import DashBoardbodyStyles from "../style/DashboardBody.module.css";
import Recent from "./Recent";
import StatCard from "./StatCard";
import { FetchData } from "../utils/REST";
import StatPage from "./StatPage";
import ChartCard from "./ChartCard";
export default function DashboardBody() {
  const [count, setCount] = React.useState({
    assets: 0,
    misc: 0,
    computers: 0,
    repassets: 0,
  });
  const data = [
    { title: "Assets", id: "assets", count: count.assets },
    { title: "Misc", id: "misc", count: count.misc },
    { title: "Computer", id: "computers", count: count.computers },
    { title: "repairs", id: "repassets", count: count.repassets },
  ];

  const fetch = async () => {
    try {
      const res1 = await FetchData("/assets");
      const res2 = await FetchData("/misc");
      const res3 = await FetchData("/computers");
      const res4 = await FetchData("/repassets");
      setCount({
        assets: res1.data.data.length,
        misc: res2.data.data.length,
        computers: res3.data.data.length,
        repassets: res4.data.data.length,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={DashBoardbodyStyles.container}>
      <h1>Dashboard</h1>
      <div className={DashBoardbodyStyles.control}>
        <div className={DashBoardbodyStyles.statCards}>
          {data.map((i) => {
            return <StatCard data={i} key={i} />;
          })}
        </div>
        <ChartCard />
      </div>

      <div className={DashBoardbodyStyles.recent}>
        <Recent path="logs" />
      </div>
    </div>
  );
}
