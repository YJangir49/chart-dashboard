const CustomYAxisLabel = ({ x, y, payload, fill = "white" }) => {
  return (
    <text x={x} y={y} dx={-16} fill={fill} fontSize={12} textAnchor="middle">
      {payload.value}
    </text>
  );
};

export default CustomYAxisLabel;
