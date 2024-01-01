const CustomYAxisLabel = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} dx={-16} fill="white" fontSize={12} textAnchor="middle">
      {payload.value}
    </text>
  );
};

export default CustomYAxisLabel;
