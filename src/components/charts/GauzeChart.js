import React from "react";
import { Chart } from "react-google-charts";

const CustomGaugeChart = ({ gauzeOptions, data }) => {
  const options = {
    redFrom: 0,
    redTo: 100,
    yellowFrom: 100,
    yellowTo: 200,
    greenFrom: 200,
    greenTo: 350,
    minorTicks: 10,
    max: 350,
    min: 0,
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    ...gauzeOptions,
  };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Chart
        chartType="Gauge"
        width={"100%"}
        height={"100%"}
        data={data}
        options={options}
      />
      ;
    </div>
  );
};

export default CustomGaugeChart;
