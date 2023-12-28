import React from "react";
import { Chart } from "react-google-charts";

const COLORS = ["green", "#e1ad01", "red"];

const CustomPie = ({ data, title, unit }) => {
  return (
    <Chart
      chartType="PieChart"
      data={[[title, unit], ...Object.entries(data)]}
      options={{
        chartArea: {
          left: "15%",
          top: 10,
          width: "100%",
          height: "88%",
        },
        title: "",
        is3D: true,
        backgroundColor: "#151419",
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
