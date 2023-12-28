import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Sound", "db"],
  ["Meter 1", 45],
  ["Meter 2", 54],
  ["Meter 3", 80],
];

const COLORS = ["green", "#e1ad01", "red"];

const CustomPie = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={{
        chartArea: {
          left: "15%",
          top: 16,
          width: "100%",
          height: "88%",
        },
        title: "Sounds",
        is3D: true,
        backgroundColor: "black",
        legend: {
          textStyle: {
            color: "white",
          },
        },
        colors: COLORS,
        slices: {
          0: { offset: 0.3 },
        },
      }}
    />
  );
};

export default CustomPie;
