const CustomXAxisLabel = ({ x, y, payload, format, fill = "white" }) => {
  // You can customize the appearance of the label here
  return (
    <text x={x} y={y} dy={16} fill={fill} fontSize={12} textAnchor="middle">
      {format ? format(payload.value) : payload.value}
    </text>
  );
};

export default CustomXAxisLabel;
