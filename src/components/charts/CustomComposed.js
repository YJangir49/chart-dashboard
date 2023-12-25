import React from "react";
import {
  ComposedChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Rectangle,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1 Dec",
    pc: 3.13,
    percent: 0,
  },
  {
    name: "2 Dec",
    pc: 7.14,
    percent: 84.65,
  },
  {
    name: "3 Dec",
    pc: 6.86,
    percent: 87.6,
  },
  {
    name: "4 Dec",
    pc: 7.53,
    percent: 90.96,
  },
  {
    name: "5 Dec",
    pc: 7.64,
    percent: 97.37,
  },
  {
    name: "6 Dec",
    pc: 6.56,
    percent: 89.46,
  },
  {
    name: "7 Dec",
    pc: 6.05,
    percent: 82.72,
  },
  {
    name: "8 Dec",
    pc: 6.51,
    percent: 87.22,
  },
  {
    name: "9 Dec",
    pc: 6.73,
    percent: 84.7,
  },
  {
    name: "10 Dec",
    pc: 6.99,
    percent: 93.41,
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

const CustomLineLabel = ({ x, y, value }) => {
  return (
    <text x={x} y={y} dy={-6} dx={-6} fill="white" fontSize={12}>
      {`${value.toFixed(2)} %`}
    </text>
  );
};

const CustomComposed = () => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <ComposedChart
        data={data}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
        // style={{
        //   backgroundColor: "black",
        // }}
      >
        <Bar
          dataKey="pc"
          fill="#418cf1"
          activeBar={<Rectangle fill="pink" stroke="#blue" />}
          type="number"
          yAxisId="bar"
        >
          <LabelList dataKey="pc" position="top" content={<CustomLabel />} />
        </Bar>
        <Line type="monotone" dataKey="percent" stroke="#ff7300" yAxisId="line">
          <LabelList
            dataKey="percent"
            position="top"
            content={<CustomLineLabel />}
          />
        </Line>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis dataKey="name" tick={<CustomXAxisLabel />} />
        <YAxis
          yAxisId="bar"
          tick={<CustomYAxisLabel />}
          padding={{ top: 50 }}
        />
        <YAxis
          yAxisId="line"
          tick={<CustomYAxisLabel />}
          orientation="right"
          padding={{ top: 20 }}
          hide
          domain={[0, Math.max(data.map((o) => o.percent))]}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CustomComposed;
