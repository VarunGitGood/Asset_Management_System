import React from "react";
import ChartStyles from "../style/ChartCard.module.css";
import DonutChart from "react-donut-chart";

export default function ChartCard() {
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
            label: "Miscellaneous",
            value: 20,
          },
          {
            label: "Computers",
            value: 30,
          },
          {
            label: "Repairs",
            value: 50,
          },
        ]}
      />
    </div>
  );
}
