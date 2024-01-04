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
import CustomXAxisLabel from "../reusable/CustomXAxisLabel";
import CustomYAxisLabel from "../reusable/CustomYAxisLabel";

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

const CustomComposed = ({ data, xKey, yBarKey, yLineKey, xFormatter }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <ComposedChart data={data}>
        <Bar
          dataKey={yBarKey}
          fill="#418cf1"
          activeBar={<Rectangle fill="pink" stroke="#blue" />}
          type="number"
          yAxisId="bar"
        >
          <LabelList
            dataKey={yBarKey}
            position="top"
            content={<CustomLabel />}
          />
        </Bar>
        <Line
          type="monotone"
          dataKey={yLineKey}
          stroke="#ff7300"
          yAxisId="line"
        >
          <LabelList
            dataKey={yLineKey}
            position="top"
            content={<CustomLineLabel />}
          />
        </Line>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis
          dataKey={xKey}
          interval={0}
          tick={<CustomXAxisLabel format={xFormatter} />}
        />
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
          domain={[0, Math.max(data.map((o) => o[yLineKey]))]}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CustomComposed;
