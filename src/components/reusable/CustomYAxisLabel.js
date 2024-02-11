const CustomYAxisLabel = ({ x, y, payload, fill = "white" }) => {
  return (
    <text x={x} y={y} dx={-22} fill={fill} fontSize={14} textAnchor="middle">
      {payload.value}
    </text>
  );
};

export default CustomYAxisLabel;
