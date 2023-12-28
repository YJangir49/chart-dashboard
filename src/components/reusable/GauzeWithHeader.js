import CustomContainer from "./CustomContainer";
import CustomGaugeChart from "../charts/GauzeChart";

const GauzeWithHeader = ({
  title,
  subTitle,
  value,
  minValue = 0,
  maxValue = 500,
  noOfTicks = 6,
  redFrom,
  redTo,
  yellowFrom,
  yellowTo,
  greenFrom,
  greenTo,
}) => {
  const getMajorTicks = () => {
    const gap = (maxValue - minValue) / (noOfTicks - 1);
    let tickGenerator = minValue;
    const tick = [minValue.toString()];
    while (tickGenerator < maxValue) {
      tickGenerator = tickGenerator + gap;
      tick.push(tickGenerator.toString());
    }
    return tick;
  };

  return (
    <CustomContainer
      title={title}
      subTitle={subTitle}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <CustomGaugeChart
        gauzeOptions={{
          majorTicks: getMajorTicks(),
          minorTicks: 10,
          max: maxValue,
          min: minValue,
          redFrom,
          redTo,
          yellowFrom,
          yellowTo,
          greenFrom,
          greenTo,
        }}
        data={[
          ["Label", "Value"],
          ["", value],
        ]}
      />
    </CustomContainer>
  );
};

export default GauzeWithHeader;
