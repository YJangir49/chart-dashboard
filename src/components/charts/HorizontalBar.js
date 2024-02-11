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

const CustomLabel = ({ x, y, value, width, height, fontSize }) => {
  const isInteger = Number.isInteger(value);
  const displayFontSize = fontSize || 10;
  const labelHeight = fontSize + 4 || 14;
  let labelScaler = value > 9999 ? 1.8 :  value > 99 ? 1.8 : 0.8;
  if (isInteger) {
    labelScaler -= 0.2;
  }
  let labelWidth = height * labelScaler;
  if(!Number.isInteger(value)){
    labelWidth = labelWidth + 24
  }

  const rectX = x - width - labelWidth < 0 ? x + width - labelWidth : x + 8;
  const textX = x - width - labelWidth < 0 ? x + width - labelWidth + 2 : x + 8;

  return (
    <g>
      <rect
        x={rectX}
        y={y + height * 0.1}
        width={labelWidth}
        height={labelHeight}
        fill="white"
      />
      <text
        x={textX}
        y={y + height * 0.1 + labelHeight - labelHeight * 0.25}
        fill="black"
        fontSize={displayFontSize}
      >
        {Number.isInteger(value) ? value : value.toFixed(2)}
      </text>
    </g>
  );
};

const HorizontalBar = ({ data, labelColor, fontSize }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" tick={<CustomXAxisLabel fill={labelColor} />} />
        <YAxis
          dataKey="name"
          type="category"
          interval={0}
          tick={<CustomYAxisLabel fill={labelColor} />}
        />
        <Bar dataKey="value" fill="green" type="number">
          <LabelList
            dataKey="value"
            content={<CustomLabel fontSize={fontSize} />}
          />
        </Bar>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBar;
