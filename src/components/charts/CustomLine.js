import React from "react";
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

const CustomLine = ({ data, name, value, xFormatter }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis dataKey={name} tick={<CustomXAxisLabel format={xFormatter} />} />
        <YAxis tick={<CustomYAxisLabel />} padding={{ top: 30 }} />
        <Line
          dataKey={value}
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
