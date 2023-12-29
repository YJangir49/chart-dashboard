import React from "react";
import {
  CartesianGrid,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  LabelList,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const CustomXAxisLabel = ({ x, y, payload, formatter }) => {
  console.log("X->", payload);
  // You can customize the appearance of the label here
  return (
    <text x={x} y={y} dy={16} fill="white" fontSize={12} textAnchor="middle">
      {formatter ? formatter(payload.value) : payload.value}
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

const CustomLabel = ({ x, y, value, width, height, index }) => {
  const fontSize = 10;
  const labelHeight = 14;
  const labelWidth = width * 0.8;
  const offset = 2;
  const rectOffset = labelHeight + offset;

  const rectY = y - rectOffset > 0 ? y - rectOffset : y;
  const textY = y - rectOffset > 0 ? y - 2 * offset - 1 : y + fontSize;

  return (
    <g>
      <rect
        x={x + width * 0.1}
        y={rectY}
        width={labelWidth}
        height={labelHeight}
        fill="white"
      />
      <text x={x + width * 0.1 + 4} y={textY} fill="black" fontSize={fontSize}>
        {value.toFixed(2)}
      </text>
    </g>
  );
};

const CustomBar = ({ data, xKey, yKey, xFormatter }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart width={900} height={400} data={data}>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis
          dataKey={xKey}
          interval={0}
          tick={<CustomXAxisLabel formatter={xFormatter} />}
        />
        <YAxis tick={<CustomYAxisLabel />} padding={{ top: 30 }} />
        <Bar dataKey={yKey} fill="#418cf1" type="number">
          <LabelList
            dataKey={yKey}
            position="top"
            className="bg-white"
            content={<CustomLabel />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBar;
