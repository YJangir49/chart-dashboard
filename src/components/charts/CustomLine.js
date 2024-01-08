import React, { useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";

import CustomXAxisLabel from "../reusable/CustomXAxisLabel";
import CustomYAxisLabel from "../reusable/CustomYAxisLabel";

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

const CustomLine = () => {
  const [data] = useState(getData(3));

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis
          dataKey="name"
          tick={<CustomXAxisLabel />}
          ticks={[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, "0"]}
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
    </ResponsiveContainer>
  );
};

export default CustomLine;
