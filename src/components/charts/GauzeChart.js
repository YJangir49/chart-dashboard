import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const CustomGaugeChart = ({
  segmentsStops,
  segmentColors,
  value,
  minValue,
  maxValue,
  startColor,
  endColor,
  needleColor,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        width: width,
        height: height,
      }}
    >
      <ReactSpeedometer
        fluidWidth={true}
        minValue={minValue}
        maxValue={maxValue}
        value={value}
        forceRender
        needleColor={needleColor}
        // segments={50}
        // startColor={startColor}
        // endColor={endColor}
        // segmentsStops
        needleHeightRatio={0.7}
        segmentColors={segmentColors}
        customSegmentStops={segmentsStops}
        paddingHorizontal={32}
        maxSegmentLabels={5}
        ringWidth={30}
      />
    </div>
  );
};

export default CustomGaugeChart;
