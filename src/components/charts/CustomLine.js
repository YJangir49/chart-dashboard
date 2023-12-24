import React, { useState } from "react";
import { CartesianGrid, XAxis, YAxis, Line, LineChart } from "recharts";

const getData = (hours) => {
  const data = [];
  const minuts = hours * 60;
  for (let i = minuts; i > 0; i--) {
    data.push({
      name: i / 60,
      value: Math.random() * (90 - 70) + 70,
    });
  }
  return data;
};

const CustomXAxisLabel = ({ x, y, payload }) => {
  // You can customize the appearance of the label here
  return (
    <text x={x} y={y} dy={16} fill="white" fontSize={12} textAnchor="middle">
      {payload.value}
    </text>
  );
};

const CustomYAxisLabel = ({ x, y, payload }) => {
  // You can customize the appearance of the label here
  return (
    <text x={x} y={y} dx={-16} fill="white" fontSize={12} textAnchor="middle">
      {payload.value}
    </text>
  );
};

const CustomLine = () => {
  const [data] = useState(getData(8));

  return (
    <LineChart width={900} height={300} data={data}>
      <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
      <XAxis
        dataKey="name"
        tick={<CustomXAxisLabel />}
        ticks={[8, 7, 6, 5, 4, 3, 2, 1, 0]}
      />
      <YAxis
        tick={<CustomYAxisLabel />}
        ticks={[100, 80, 60, 40, 20, 0]}
        padding={{ top: 30 }}
      />
      <Line
        dataKey="value"
        stroke="#4de643"
        strokeWidth={2}
        type="number"
        dot={null}
      />
    </LineChart>
  );
};

export default CustomLine;
