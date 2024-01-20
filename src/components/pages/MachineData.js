import GroupBar from "../charts/GroupBar";
import HorizontalBar from "../charts/HorizontalBar";
import CustomComposed from "../charts/CustomComposed";
import CustomTables from "../ui/CustomTables";
import LogoSection from "../ui/LogoSection";
import CustomContainer from "../reusable/CustomContainer";
import GauzeWithHeader from "../reusable/GauzeWithHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../reusable/Loader";
import { converter } from "../../utils/helper";
import { addDays } from "date-fns";
import { dateFormat } from "../../utils/date";
import { KEY_MAP, MACHINE_ROUTE_MAP } from "../../constants/routes";
import { APP_URL } from "../../constants/url";
import { useAppContext } from "../appContext";

export default function MachineData({ machineId }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const { activeShift } = useAppContext();

  const [graphInfo, setGraphInfo] = useState({
    loading: false,
    data: {},
    shift: activeShift,
  });

  const [timeData, setTimeData] = useState({
    live: true,
    date: new Date(),
    activeShift,
    noOfDays: 10,
  });

  const getActiveShiftIndex = () => {
    switch (graphInfo.shift) {
      case "Shift-A":
        return 0;
      case "Shift-B":
        return 1;
      default:
        return 2;
    }
  };

  useEffect(() => {
    const fetchTGMData = async (intervalId) => {
      try {
        const response = await axios.get(`${APP_URL}/tp/${machineId}`);
        if (response) {
          setData(converter(response.data.Shift));
        }
      } catch (e) {
        if (intervalId) {
          clearInterval(intervalId);
        }
        console.log(e);
      }
      setLoading(false);
    };

    fetchTGMData();

    const intervalId = setInterval(() => {
      fetchTGMData(intervalId);
    }, process.env.REACT_APP_API_CALL_TIME || 60000);

    return () => clearInterval(intervalId);
  }, [machineId]);

  useEffect(() => {
    const endDate = timeData.date.getTime();
    const startDate = addDays(timeData.date, -timeData.noOfDays).getTime();
    const body = { startDate, endDate };
    setGraphInfo((prev) => ({ ...prev, loading: true }));
    axios
      .post(`${APP_URL}/tp/historical/${machineId}`, body)
      .then((response) => {
        if (response) {
          const data = response.data;
          setGraphInfo((prev) => ({ ...prev, loading: false, data }));
        } else setGraphInfo((prev) => ({ ...prev, loading: false }));
      })
      .catch((err) => {
        console.log(err);
        setGraphInfo((prev) => ({ ...prev, loading: false }));
      });
  }, [
    timeData.live,
    timeData.date,
    timeData.activeShift,
    timeData.noOfDays,
    machineId,
  ]);

  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center p-2"
        style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
      >
        {loading ? (
          <div className="h-screen">
            <Loader dotStyle={{ backgroundColor: "black" }} />
          </div>
        ) : (
          <>
            {data ? (
              <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
                <div className="col-span-3 row-span-2">
                  <LogoSection
                    pageName={MACHINE_ROUTE_MAP[machineId]}
                    timeData={timeData}
                    setTimeData={setTimeData}
                    runningStatus={data.RunningStatus}
                  >
                    <div className="flex justify-between px-2 text-sm mt-5">
                      <p>OEE</p>
                      <div className="flex w-full bg-black justify-end items-center ml-16">
                        <p className="digital-font text-right">{data.OEE}</p>
                        <span className="text-[9px] text-white">%</span>
                      </div>
                    </div>
                    <div className="flex justify-between px-2 text-sm mt-2">
                      <p className="pr-[6px]">OR</p>
                      <div className="flex w-full bg-black justify-end items-center ml-16">
                        <p className="digital-font text-right">{data.OR}</p>
                      </div>
                    </div>
                  </LogoSection>
                </div>
                <div className="col-span-3 row-span-2 col-start-1 row-start-3 dotted-bg">
                  <CustomContainer
                    headingLeft="Production"
                    headingRight={"(Nos)"}
                  >
                    <HorizontalBar
                      data={Object.entries(
                        data.Production[KEY_MAP[machineId]]
                      ).map((entry) => ({
                        name: entry[0],
                        value: entry[1],
                      }))}
                    />
                  </CustomContainer>
                </div>
                <div className="col-span-3 row-span-2 col-start-1 row-start-5 dotted-bg">
                  <CustomContainer headingLeft="Power" headingRight={"(KWH)"}>
                    <GroupBar
                      data={Object.entries(graphInfo.data)
                        .slice(7)
                        .map(([key, value]) => ({
                          name: key,
                          value1: value.Shift["Shift-A"].Power,
                          value2: value.Shift["Shift-B"].Power,
                          value3: value.Shift["Shift-C"].Power,
                        }))}
                      xFormatter={dateFormat}
                    />
                  </CustomContainer>
                </div>
                <div className="col-span-3 row-span-2 col-start-1 row-start-7 dotted-bg">
                  <CustomContainer headingLeft="Air" headingRight={"(CFM)"}>
                    <HorizontalBar
                      data={Object.entries(data.Air).map((entry) => ({
                        name: entry[0],
                        value: entry[1],
                      }))}
                    />
                  </CustomContainer>
                </div>
                <div className="col-span-4 row-span-2 col-start-4 row-start-1 bg-[#151419] text-white text-sm dotted-bg">
                  <CustomTables
                    data={data.StopTime}
                    title="Stop-Time"
                    activeCol={getActiveShiftIndex()}
                  />
                </div>
                <div className="col-span-4 row-span-2 col-start-8 row-start-1 bg-[#151419] text-white text-sm dotted-bg">
                  <CustomTables
                    data={data.Production}
                    title="Production"
                    activeCol={getActiveShiftIndex()}
                  />
                </div>
                <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419] dotted-bg">
                  <CustomContainer headingLeft="Daily Production & OEE">
                    {graphInfo.loading ? (
                      <Loader />
                    ) : (
                      <CustomComposed
                        data={Object.entries(graphInfo.data).map(
                          ([key, value]) => ({
                            name: key,
                            value: value.Shift[graphInfo.shift].Production,
                            oee: value.OEE,
                          })
                        )}
                        xKey={"name"}
                        yBarKey={"value"}
                        yLineKey={"oee"}
                        xFormatter={dateFormat}
                      />
                    )}
                  </CustomContainer>
                </div>
                <div className="col-span-3 row-span-2 col-start-4 row-start-7 dotted-bg">
                  <GauzeWithHeader
                    heading={"Speed"}
                    subHeading={"(Shift-A)"}
                    uom={"Per/min"}
                    value={data.Speed["Shift-A"]}
                    redFrom={200}
                    redTo={500}
                    yellowFrom={100}
                    yellowTo={200}
                    greenFrom={0}
                    greenTo={100}
                  />
                </div>
                <div
                  className="col-span-2 row-span-2 col-start-7 row-start-7 dotted-bg"
                  s
                >
                  <GauzeWithHeader
                    heading={"Speed"}
                    subHeading={"(Shift-B)"}
                    uom={"Per/min"}
                    value={data.Speed["Shift-B"]}
                    redFrom={200}
                    redTo={500}
                    yellowFrom={100}
                    yellowTo={200}
                    greenFrom={0}
                    greenTo={100}
                  />
                </div>
                <div className="col-span-3 row-span-2 col-start-9 row-start-7 dotted-bg">
                  <GauzeWithHeader
                    heading={"Speed"}
                    subHeading={"(Shift-C)"}
                    uom={"Per/min"}
                    value={data.Speed["Shift-C"]}
                    redFrom={200}
                    redTo={500}
                    yellowFrom={100}
                    yellowTo={200}
                    greenFrom={0}
                    greenTo={100}
                  />
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
}
