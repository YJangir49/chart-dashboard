import React from "react";
import { Chart } from "react-google-charts";

const CustomGaugeChart = ({ gauzeOptions, data }) => {
  const options = {
    // width: 320,
    // height: 320,
    redFrom: 0,
    redTo: 100,
    yellowFrom: 100,
    yellowTo: 200,
    greenFrom: 200,
    greenTo: 350,
    minorTicks: 10,
    max: 400,
    min: -50,
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    ...gauzeOptions,
  };

  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="Gauge"
      data={data}
      options={options}
    />
  );
};

export default CustomGaugeChart;
