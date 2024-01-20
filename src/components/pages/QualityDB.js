import React, { useEffect, useState } from "react";
import LogoSection from "../ui/LogoSection";
// import { useAppContext } from "../appContext";
import CustomContainer from "../reusable/CustomContainer";
import CustomLine from "../charts/CustomLine";
import { APP_URL } from "../../constants/url";
import axios from "axios";
import { addDays } from "date-fns";

const QualityDB = () => {
  const [timeData, setTimeData] = useState({
    live: true,
    date: new Date(),
    // activeShift,
    noOfDays: 10,
  });

  // const { activeShift } = useAppContext();

  useEffect(() => {
    const endDate = timeData.date.getTime();
    const startDate = addDays(timeData.date, -timeData.noOfDays).getTime();
    const body = {
      startDate,
      endDate,
      type: "m2",
    };
    // setGraphInfo((prev) => ({ ...prev, loading: true }));
    axios
      .post(`${APP_URL}/tp/mixer`, body)
      .then((response) => {
        if (response) {
          const data = response.data;
          console.log("QDB-data", data);
          // setBarData(data);
        }
        // setGraphInfo((prev) => ({ ...prev, loading: false }));
      })
      .catch((err) => {
        console.log(err);
        // setGraphInfo((prev) => ({ ...prev, loading: false }));
      });
  }, [
    timeData.live,
    // graphInfo.type,
    timeData.date,
    timeData.activeShift,
    timeData.noOfDays,
  ]);

  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center p-2"
      style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
    >
      <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
        <div className="col-span-3 row-span-2">
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
            <CustomLine />
          </CustomContainer>
        </div>

        <div className="col-span-8 row-span-4 col-start-4 row-start-5 bg-[#151419] dotted-bg">
          <CustomContainer
            headingLeft="Viscosity-Value Trend"
            headingRight="(last 20 batches)"
            headingCenter="Mixer-2"
          >
            <CustomLine />
          </CustomContainer>
        </div>
      </div>
    </div>
  );
};

export default QualityDB;
