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

const data = [
  {
    name: "1 Dec",
    pc: 37.09,
  },
  {
    name: "2 Dec",
    pc: 47.12,
  },
  {
    name: "3 Dec",
    pc: 41.88,
  },
  {
    name: "4 Dec",
    pc: 44.54,
  },
  {
    name: "5 Dec",
    pc: 44.9,
  },
  {
    name: "6 Dec",
    pc: 42.02,
  },
  {
    name: "7 Dec",
    pc: 25.74,
  },
  {
    name: "8 Dec",
    pc: 41.51,
  },
  {
    name: "9 Dec",
    pc: 49.27,
  },
  {
    name: "10 Dec",
    pc: 59.0,
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

const CustomBar = () => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart width={900} height={400} data={data}>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis dataKey="name" tick={<CustomXAxisLabel />} />
        <YAxis tick={<CustomYAxisLabel />} padding={{ top: 30 }} />
        <Bar
          dataKey="pc"
          fill="#418cf1"
          activeBar={<Rectangle fill="pink" stroke="#blue" />}
          type="number"
        >
          <LabelList
            dataKey="pc"
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
