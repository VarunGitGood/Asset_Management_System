import React from "react";
import ChartStyles from "../style/ChartCard.module.css";
import DonutChart from "react-donut-chart";
import { FetchData } from "../utils/REST";
import { useEffect } from "react";
import { AuthContext } from "../context/authContext";

export default function ChartCard({chartData}) {
  const [cost,setCost]=React.useState(0);

   const fetchCost=async()=>{
      try {
        const res=await FetchData(`/cost`);
        setCost(res.data.data[0].cost);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      fetchCost();
    }, []);

  return (
    <div className={ChartStyles.card}>
      <DonutChart
        className="dchart"
        width={450}
        height={400}
        innerRadius={0.8}
        selectedOffset={0}
        outerRadius={0.9}
        colors={["#fdcc0a", "#eb5756", "#6acf95", "#0d57b2", "#c6c6c6"]}
        data={[
          {
            label: chartData[0].label,
            value: chartData[0].value,
          },
          {
            label: chartData[1].label,
            value: chartData[1].value,
          },
          {
            label: chartData[2].label,
            value: chartData[2].value,
          },
        ]}
      />
      <h2>Total Asset Costs: {cost}</h2>
    </div>
  );
}
