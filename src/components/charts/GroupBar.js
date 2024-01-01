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

import CustomXAxisLabel from "../reusable/CustomXAxisLabel";
import CustomYAxisLabel from "../reusable/CustomYAxisLabel";

const CustomLabel = ({ x, y, value, width }) => {
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

const GroupBar = ({ data, xFormatter }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="1 1" strokeOpacity={0.3} />
        <XAxis
          dataKey="name"
          interval={0}
          tick={<CustomXAxisLabel format={xFormatter} />}
        />
        <YAxis tick={<CustomYAxisLabel />} padding={{ top: 30 }} />
        <Bar
          dataKey="value1"
          fill="#418cf1"
          activeBar={<Rectangle fill="pink" stroke="#blue" />}
          type="number"
        >
          <LabelList
            dataKey="value1"
            position="top"
            content={<CustomLabel />}
          />
        </Bar>
        <Bar
          dataKey="value2"
          fill="yellow"
          activeBar={<Rectangle fill="pink" stroke="#blue" />}
          type="number"
        >
          <LabelList
            dataKey="value2"
            position="top"
            content={<CustomLabel />}
          />
        </Bar>
        <Bar
          dataKey="value3"
          fill="red"
          activeBar={<Rectangle fill="pink" stroke="#blue" />}
          type="number"
        >
          <LabelList
            dataKey="value3"
            position="top"
            content={<CustomLabel />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GroupBar;
