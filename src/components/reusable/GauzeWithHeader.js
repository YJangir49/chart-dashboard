import CustomContainer from "./CustomContainer";
import CustomGaugeChart from "../charts/GauzeChart";

const GauzeWithHeader = ({
  heading,
  subHeading,
  uom,
  value,
  minValue = 0,
  maxValue = 500,
  segmentColors,
  segmentsStops,
  hideHeader = false,
  startColor,
  endColor,
  needleColor = "white",
  width,
  height,
}) => {
  return (
    <>
      {hideHeader ? (
        <CustomGaugeChart
          minValue={minValue}
          maxValue={maxValue}
          segmentsStops={segmentsStops}
          segmentColors={segmentColors}
          value={value}
          startColor={startColor}
          endColor={endColor}
          needleColor={needleColor}
          width={width}
          height={height}
        />
      ) : (
        <CustomContainer
          headingLeft={heading}
          subHeadingLeft={subHeading}
          headingRight={uom}
          subHeadingRight={value}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <CustomGaugeChart
            minValue={minValue}
            maxValue={maxValue}
            segmentsStops={segmentsStops}
            segmentColors={segmentColors}
            value={value}
            startColor={startColor}
            endColor={endColor}
            needleColor={needleColor}
            width={width}
            height={height}
          />
        </CustomContainer>
      )}
    </>
  );
};

export default GauzeWithHeader;
