import React from "react";
import { Chart } from "react-google-charts";

const COLORS = ["green", "#e1ad01", "red"];

const CustomPie = ({ data, title, unit }) => {
  return (
    <Chart
      chartType="PieChart"
      data={[[title, unit], ...Object.entries(data)]}
      width={"100%"}
      height={"100%"}
      options={{
        chartArea: {
          left: "15%",
          top: 4,
          width: "100%",
          height: "88%",
        },
        title: "",
        is3D: true,
        backgroundColor: "none",
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
