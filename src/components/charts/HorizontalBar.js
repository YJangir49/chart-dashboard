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

const data = [
  {
    name: "Shift - A",
    pc: 121656,
  },
  {
    name: "Shift - B",
    pc: 131522,
  },
  {
    name: "Shift - C",
    pc: 108463,
  },
];

const CustomXAxisLabel = ({ x, y, payload }) => {
  // You can customize the appearance of the label here
  return (
    <text x={x} y={y} dy={16} fill="white" fontSize={12} textAnchor="middle">
      {payload.value}
    </text>
  );
};

const CustomYAxisLabel = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} dx={-24} fill="white" fontSize={12} textAnchor="middle">
      {payload.value}
    </text>
  );
};

const CustomLabel = ({ x, y, value, width, height }) => {
  const fontSize = 10;
  const labelHeight = 14;
  const labelWidth = height * 0.8;

  return (
    <g>
      <rect
        x={x + width - labelWidth}
        y={y + height * 0.4}
        width={labelWidth}
        height={labelHeight}
        fill="white"
      />
      <text
        x={x + width - labelWidth}
        y={y + height * 0.4 + labelHeight - labelHeight * 0.25}
        fill="black"
        fontSize={fontSize}
      >
        {value.toFixed(2)}
      </text>
    </g>
  );
};

const HorizontalBar = () => {
  return (
    <ResponsiveContainer width={900} height={300}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" tick={<CustomXAxisLabel />} />
        <YAxis dataKey="name" type="category" tick={<CustomYAxisLabel />} />
        <Bar dataKey="pc" fill="green" type="number">
          <LabelList dataKey="pc" content={<CustomLabel />} />
        </Bar>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBar;
