import CustomBar from "../charts/CustomBar";
import CustomLine from "../charts/CustomLine";
import CustomPie from "../charts/CustomPie";
import CustomContainer from "../reusable/CustomContainer";
import GauzeWithHeader from "../reusable/GauzeWithHeader";
import CustomTables from "../ui/CustomTables";
import LogoSection from "../ui/LogoSection";
import SwitchBoard from "../ui/SwitchBoard";
import { reverseConverter } from "../../utils/helper";
import { useEffect, useState } from "react";
import axios from "axios";
import { dateFormat } from "../../utils/date";
import { APP_URL } from ".././../constants/url";
import { addDays } from "date-fns";
import Loader from "../reusable/Loader";
import { useAppContext } from "../appContext";

export default function PerformanceDashboard() {
  const [loding, setLoding] = useState(true);
  const [utility, setUtilityData] = useState();
  const [barData, setBarData] = useState([]);
  const { activeShift } = useAppContext();

  const [graphInfo, setGraphInfo] = useState({
    loading: false,
    type: "power",
    unit: "KWH/ton",
    label: "Power Consumption",
  });

  const [timeData, setTimeData] = useState({
    live: true,
    date: new Date(),
    activeShift,
    noOfDays: 10,
  });

  useEffect(() => {
    const fetchUtitlityConstants = async (intervalId) => {
      try {
        const response = await axios.get(`${APP_URL}/tp/utility/constants`);
        if (response) {
          const data = response.data;
          setUtilityData(data);
        }
      } catch (err) {
        if (intervalId) clearInterval(intervalId);
        console.log(err);
      }
      setLoding(false);
    };
    fetchUtitlityConstants();

    const intervalId = setInterval(() => {
      fetchUtitlityConstants(intervalId);
    }, process.env.REACT_APP_API_CALL_TIME || 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const endDate = timeData.date.getTime();
    const startDate = addDays(timeData.date, -timeData.noOfDays).getTime();
    const body = {
      startDate,
      endDate,
      type: graphInfo.type,
    };
    setGraphInfo((prev) => ({ ...prev, loading: true }));
    axios
      .post(`${APP_URL}/tp/utility/tphistorical`, body)
      .then((response) => {
        if (response) {
          const data = response.data;
          setBarData(data);
        }
        setGraphInfo((prev) => ({ ...prev, loading: false }));
      })
      .catch((err) => {
        console.log(err);
        setGraphInfo((prev) => ({ ...prev, loading: false }));
      });
  }, [
    timeData.live,
    graphInfo.type,
    timeData.date,
    timeData.activeShift,
    timeData.noOfDays,
  ]);

  if (!loding && !utility) {
    return <></>;
  }

  console.log(graphInfo);

  return (
    <>
      <div
        className="w-full bg-no-repeat bg-cover bg-center p-2"
        style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
      >
        {loding ? (
          <div className="h-screen">
            <Loader dotStyle={{ backgroundColor: "black" }} />
          </div>
        ) : (
          <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
            <div className="col-span-3 row-span-1">
              <LogoSection
                pageName={"TP"}
                timeData={timeData}
                setTimeData={setTimeData}
                runningStatus={1} //Replace key from the running status key from api response
              />
            </div>
            <div className="col-span-3 row-span-3 col-start-1 row-start-2 bg-[#151419] dotted-bg">
              <CustomContainer headingLeft="Sound" headingRight="dB">
                <CustomPie data={utility?.Sound} title="Sound" unit={"db"} />
              </CustomContainer>
            </div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-5 bg-[#151419]  dotted-bg">
              <CustomContainer
                headingLeft="dB Meter-1"
                headingRight="last 8 hours"
              >
                <CustomLine />
              </CustomContainer>
            </div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-7 bg-[#151419]  dotted-bg">
              <CustomContainer headingLeft="Bag-Filter">
                <SwitchBoard data={utility?.Bag} />
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
                data={reverseConverter(utility?.Shift)}
                title="Shift Parameters"
              />
            </div>
            <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419]  dotted-bg">
              <CustomContainer
                headingLeft={graphInfo.label}
                headingRight={graphInfo.unit}
              >
                {graphInfo.loading ? (
                  <Loader />
                ) : (
                  <CustomBar
                    data={barData}
                    xKey={"DateAndTime"}
                    yKey={"TotalVal"}
                    xFormatter={dateFormat}
                  />
                )}
              </CustomContainer>
            </div>
            <div
              className="col-span-2 row-span-2 col-start-4 row-start-7 dotted-bg cursor-pointer"
              onClick={() => {
                setGraphInfo({
                  type: "power",
                  unit: "KWH/ton",
                  label: "Power Consumption",
                });
              }}
            >
              <GauzeWithHeader
                heading={"Power"}
                uom={"KWH"}
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
            <div
              className="col-span-2 row-span-2 col-start-6 row-start-7 dotted-bg cursor-pointer"
              onClick={() => {
                setGraphInfo({
                  type: "steam",
                  unit: "Kg/hour",
                  label: "Steam Consumption",
                });
              }}
            >
              <GauzeWithHeader
                heading={"Steam"}
                uom={"Kg/hour"}
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
            <div
              className="col-span-2 row-span-2 col-start-8 row-start-7 dotted-bg cursor-pointer"
              onClick={() => {
                setGraphInfo({
                  type: "air",
                  unit: "CFM",
                  label: "Air Consumption",
                });
              }}
            >
              <GauzeWithHeader
                heading={"Air"}
                uom={"CFM"}
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
            <div
              className="col-span-2 row-span-2 col-start-10 row-start-7 dotted-bg cursor-pointer"
              onClick={() => {
                setGraphInfo({
                  type: "water",
                  unit: "Mt3/Hour",
                  label: "Water Consumption",
                });
              }}
            >
              <GauzeWithHeader
                heading={"Water"}
                uom={"Mt3/Hour"}
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
        )}
      </div>
    </>
  );
}
