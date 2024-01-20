import React, { useState } from "react";
import LogoSection from "../ui/LogoSection";
// import { useAppContext } from "../appContext";
import CustomContainer from "../reusable/CustomContainer";

const QualityDB = () => {
  const [timeData, setTimeData] = useState({
    live: true,
    date: new Date(),
    // activeShift,
    noOfDays: 10,
  });

  // const { activeShift } = useAppContext();
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center p-2"
      style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
    >
      <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
        <div className="col-span-3 row-span-1">
          <LogoSection
            pageName={"Quality"}
            timeData={timeData}
            setTimeData={setTimeData}
            runningStatus={1} //Replace key from the running status key from api response
          />
        </div>

        <div className="col-span-8 row-span-4 col-start-4 row-start-1 bg-[#151419] dotted-bg">
          <CustomContainer
            headingLeft="PH-Value Trend"
            headingRight="(last 20 batches)"
            headingCenter="Mixer-1"
          >
            {/* Line graph */}
          </CustomContainer>
        </div>

        <div className="col-span-8 row-span-4 col-start-4 row-start-5 bg-[#151419] dotted-bg">
          <CustomContainer
            headingLeft="Viscosity-Value Trend"
            headingRight="(last 20 batches)"
            headingCenter="Mixer-2"
          >
            {/* Line graph 2 */}
          </CustomContainer>
        </div>
      </div>
    </div>
  );
};

export default QualityDB;
