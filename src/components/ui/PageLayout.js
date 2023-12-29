import CustomBar from "../charts/CustomBar";
import CustomLine from "../charts/CustomLine";
import CustomPie from "../charts/CustomPie";
import CustomContainer from "../reusable/CustomContainer";
import GauzeWithHeader from "../reusable/GauzeWithHeader";
import CustomTables from "./CustomTables";
import LogoSection from "./LogoSection";
import SwitchBoard from "./SwitchBoard";
import { reverseConverter } from "../../utils/helper";
import { useEffect, useState } from "react";
import axios from "axios";
import { dateFormat } from "../../utils/date";
import { addDays, format, parseISO } from "date-fns";
import { generateDataBetweenDates } from "../../utils/mockDataGenerator";

// import imagePath from "";

const BASE_URL =
  "https://658ee7892871a9866e7a02ac.mockapi.io/chart/tp_utility_constant";

export default function PageLayout() {
  const [utility, setUtilityData] = useState();
  const [isLive, setIsLive] = useState(true);
  const [barData, setBarData] = useState();
  const [] = useState();

  useEffect(() => {
    let currentDate = new Date();
    let startDate = isLive
      ? addDays(currentDate, -9)
      : addDays(currentDate, -Math.random() * 10 - 10);
    const endDate = isLive ? currentDate : addDays(startDate, 10);
    const data = generateDataBetweenDates(startDate, endDate);
    setBarData(data);
  }, [isLive]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        if (response) {
          const data = response.data[0];
          setUtilityData(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!utility) {
    return <></>;
  }

  // bg-gradient-to-br from-neutral-300 to-neutral-500
  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center px-2"
        style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
      >
        <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
          <div className="col-span-3 row-span-2">
            <LogoSection isLive={isLive} setIsLive={setIsLive} />
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-3 bg-[#151419] dotted-bg">
            <CustomContainer title="Sound" subTitle="dB">
              <CustomPie data={utility.Sound} title="Sound" unit={"db"} />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-5 bg-[#151419]  dotted-bg">
            <CustomContainer title="dB Meter-1" subTitle="last 8 hours">
              <CustomLine />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-7 bg-[#151419]  dotted-bg">
            <CustomContainer title="Bag-Filter">
              <SwitchBoard data={utility.Bag} />
            </CustomContainer>
          </div>
          <div className="col-span-4 row-span-2 col-start-4 row-start-1 bg-[#151419] text-white text-sm  dotted-bg">
            <CustomTables
              data={utility.Mixer}
              title="Batch Quality"
              subTitle="(recent)"
            />
          </div>
          <div className="col-span-4 row-span-2 col-start-8 row-start-1 bg-[#151419] text-white text-sm  dotted-bg">
            <CustomTables
              data={reverseConverter(utility.Shift)}
              title="Shift Parameters"
            />
          </div>
          <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419]  dotted-bg">
            <CustomContainer title="Power Consumption" subTitle="(KWH/ton)">
              <CustomBar
                data={barData}
                xKey={"DateAndTime"}
                yKey={"TotalVal"}
                xFormatter={dateFormat}
              />
            </CustomContainer>
          </div>
          <div className="col-span-2 row-span-2 col-start-4 row-start-7 bg-[#151419]  dotted-bg">
            <GauzeWithHeader
              title={"Power"}
              subTitle={"KWH"}
              value={utility.Shift["Shift-A"].Power}
              maxValue={5000}
              redFrom={2000}
              redTo={5000}
              yellowFrom={1000}
              yellowTo={2000}
              greenFrom={0}
              greenTo={1000}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-6 row-start-7 bg-[#151419]  dotted-bg">
            <GauzeWithHeader
              title={"Steam"}
              subTitle={"Kg/hour"}
              value={utility.Shift["Shift-A"].Steam}
              maxValue={1000}
              redFrom={600}
              redTo={1000}
              yellowFrom={300}
              yellowTo={600}
              greenFrom={0}
              greenTo={300}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-8 row-start-7 bg-[#151419]  dotted-bg">
            <GauzeWithHeader
              title={"Air"}
              subTitle={"CFM"}
              value={utility.Shift["Shift-A"].Air}
              maxValue={5000}
              redFrom={2000}
              redTo={5000}
              yellowFrom={1000}
              yellowTo={2000}
              greenFrom={0}
              greenTo={1000}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-10 row-start-7 bg-[#151419]  dotted-bg">
            <GauzeWithHeader
              title={"Water"}
              subTitle={"Mt3/Hour"}
              value={utility.Shift["Shift-A"].Water}
              redFrom={200}
              redTo={500}
              yellowFrom={100}
              yellowTo={200}
              greenFrom={0}
              greenTo={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
