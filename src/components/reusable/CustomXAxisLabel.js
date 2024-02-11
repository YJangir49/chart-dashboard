const CustomXAxisLabel = ({ x, y, payload, format, fill = "white" }) => {
  return (
    <text x={x} y={y} dy={16} fill={fill} fontSize={14} textAnchor="middle">
      {format ? format(payload.value) : payload.value}
    </text>
  );
};

export default CustomXAxisLabel;
