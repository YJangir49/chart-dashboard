import React from "react";
import {
  CartesianGrid,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  LabelList,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "7 Dec",
    value1: 75,
    value2: 40,
    value3: 0,
  },
  {
    name: "9 Dec",
    value1: 74,
    value2: 65,
    value3: 66,
  },
  {
    name: "10 Dec",
    value1: 73,
    value2: 69,
    value3: 69,
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
  console.log("x: ", x, "y: ", y, "width: ", width, "height:", height);
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

const CustomGroupBar = () => {
  return (
    <BarChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      style={{
        backgroundColor: "black",
      }}
    >
      <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
      <XAxis dataKey="name" tick={<CustomXAxisLabel />} />
      <YAxis tick={<CustomYAxisLabel />} padding={{ top: 30 }} />
      <Bar
        dataKey="value1"
        fill="#418cf1"
        activeBar={<Rectangle fill="pink" stroke="#blue" />}
        type="number"
      >
        <LabelList dataKey="value1" position="top" content={<CustomLabel />} />
      </Bar>
      <Bar
        dataKey="value2"
        fill="yellow"
        activeBar={<Rectangle fill="pink" stroke="#blue" />}
        type="number"
      >
        <LabelList dataKey="value2" position="top" content={<CustomLabel />} />
      </Bar>
      <Bar
        dataKey="value3"
        fill="red"
        activeBar={<Rectangle fill="pink" stroke="#blue" />}
        type="number"
      >
        <LabelList dataKey="value3" position="top" content={<CustomLabel />} />
      </Bar>
    </BarChart>
  );
};

export default CustomGroupBar;
