import React from "react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";

import CustomXAxisLabel from "../reusable/CustomXAxisLabel";
import CustomYAxisLabel from "../reusable/CustomYAxisLabel";

const CustomLabel = ({ x, y, value, width, height }) => {
  const isInteger = Number.isInteger(value);
  const fontSize = 10;
  const labelHeight = 14;
  let labelScaler = value > 9999 ? 1.5 : value > 99 ? 1 : 0.8;
  if (isInteger) {
    labelScaler -= 0.2;
  }
  const labelWidth = height * labelScaler;

  const rectX = x - width - labelWidth < 0 ? x + width - labelWidth : x + 2;
  const textX = x - width - labelWidth < 0 ? x + width - labelWidth + 2 : x + 4;

  return (
    <g>
      <rect
        x={rectX}
        y={y + height * 0.4}
        width={labelWidth}
        height={labelHeight}
        fill="white"
      />
      <text
        x={textX}
        y={y + height * 0.4 + labelHeight - labelHeight * 0.25}
        fill="black"
        fontSize={fontSize}
      >
        {Number.isInteger(value) ? value : value.toFixed(2)}
      </text>
    </g>
  );
};

const HorizontalBar = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" tick={<CustomXAxisLabel />} />
        <YAxis dataKey="name" type="category" tick={<CustomYAxisLabel />} />
        <Bar dataKey="value" fill="green" type="number">
          <LabelList dataKey="value" content={<CustomLabel />} />
        </Bar>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBar;
