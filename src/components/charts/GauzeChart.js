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
  const needleValue =
    value && value > maxValue
      ? maxValue
      : value && value < minValue
      ? minValue
      : value;
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
        value={needleValue}
        forceRender
        needleColor={needleColor}
        needleHeightRatio={0.7}
        segmentColors={segmentColors}
        customSegmentStops={segmentsStops}
        paddingHorizontal={32}
        maxSegmentLabels={5}
        ringWidth={30}
        labelFontSize={12}
        valueTextFontSize={16}
        currentValueText={`${value}`}
        
      />
    </div>
  );
};

export default CustomGaugeChart;
