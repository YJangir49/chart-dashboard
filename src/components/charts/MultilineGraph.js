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

const CustomLineLabel = ({ x, y, value = 0, index }) => (
  <g transform={`translate(${x},${y}) rotate(-60)`}>
    <text
      x={0}
      y={index % 2 === 0 ? -10 : 10}
      dy={10}
      textAnchor="end"
      fill="white"
      fontSize={14}
    >
      {Number.isInteger(value) ? value.toString() : value.toFixed(2)}
    </text>
  </g>
);

const Multiline = ({ data, name, value, xFormatter, min, max }) => {
  const dataWithTrendLine = data.map((item) => ({ ...item, min, max }));

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={dataWithTrendLine}>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis dataKey={name} tick={<CustomXAxisLabel format={xFormatter} />} />
        <YAxis tick={<CustomYAxisLabel />} padding={{ top: 30 }} />
        <Line
          dataKey={value}
          stroke="yellow"
          strokeWidth={2}
          type="number"
          dot={null}
          label={<CustomLineLabel />}
        />
        {min ? (
          <Line
            dataKey={"min"}
            stroke="green"
            strokeWidth={2}
            type="number"
            dot={null}
          />
        ) : null}
        {max ? (
          <Line
            dataKey={"max"}
            stroke="red"
            strokeWidth={2}
            type="number"
            dot={null}
          />
        ) : null}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Multiline;
