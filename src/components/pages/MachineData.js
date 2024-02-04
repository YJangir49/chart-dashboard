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
import { MACHINE_ROUTE_MAP } from "../../constants/routes";
import { APP_URL } from "../../constants/url";
import { useAppContext } from "../appContext";

export default function MachineData({ machineId }) {
  const [pageLoading, setPageLoding] = useState(true);
  const [utilitiesLoading, setUtilitiesLoding] = useState(true);
  const [data, setData] = useState();

  const {
    live,
    setLive,
    systemDate,
    activeShift,
    activeShiftIndex,
    setBackendDate,
    setSystemDate,
    historicDate,
    setHistoricDate,
  } = useAppContext();

  const [graphInfo, setGraphInfo] = useState({
    loading: false,
    data: {},
    shift: activeShift,
    type: "power",
  });

  const [noOfDays, setNoOfDays] = useState(10);

  useEffect(() => {
    return () => {
      setLive(true);
      setSystemDate(new Date());
      setHistoricDate(new Date());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchTGMData = async () => {
      try {
        setUtilitiesLoding(true);
        const response = live
          ? await axios.get(`${APP_URL}/tp/${machineId}`)
          : await axios.post(`${APP_URL}/tp/${machineId}`, {
              startDate: systemDate.getTime(),
            });
        if (response) {
          setData(converter(response.data.Shift));
          if (response.data?.Shift?.DateAndTime)
            setBackendDate(new Date(response.data.Shift.DateAndTime));
        }
      } catch (err) {
        console.log(err);
      }
      setPageLoding(false);
      setUtilitiesLoding(false);
    };

    fetchTGMData();
    // eslint-disable-next-line
  }, [systemDate, machineId, setBackendDate]);

  useEffect(() => {
    const endDate = historicDate.getTime();
    const startDate = addDays(historicDate, -noOfDays).getTime();
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
  }, [historicDate, noOfDays, machineId]);

  const entries = Object.entries(graphInfo.data);
  const sliceEntries =
    entries.length > 3 ? entries.slice(entries.length - 3) : entries;

  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center p-2"
        style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
      >
        {pageLoading ? (
          <div className="h-screen">
            <Loader dotStyle={{ backgroundColor: "black" }} />
          </div>
        ) : (
          <>
            {data ? (
              <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
                {utilitiesLoading && (
                  <>
                    <div className="absolute inset-0 bg-black opacity-90 z-40"></div>
                    <Loader className="bg-white" />
                  </>
                )}
                <div className="col-span-3 row-span-2">
                  <LogoSection
                    pageName={MACHINE_ROUTE_MAP[machineId]}
                    noOfDays={noOfDays}
                    setNoOfDays={setNoOfDays}
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
                <div
                  className="col-span-3 row-span-2 col-start-1 row-start-3 dotted-bg cursor-pointer"
                  onClick={() =>
                    setGraphInfo((prev) => ({ ...prev, type: "stoptime" }))
                  }
                >
                  <CustomContainer
                    headingLeft="Stop Time"
                    headingRight={"(Nos)"}
                  >
                    {!utilitiesLoading && graphInfo.loading ? (
                      <Loader />
                    ) : (
                      <GroupBar
                        data={sliceEntries.map(([key, value]) => ({
                          name: key,
                          value1: value.Shift["Shift-A"].StopTime,
                          value2: value.Shift["Shift-B"].StopTime,
                          value3: value.Shift["Shift-C"].StopTime,
                        }))}
                        xFormatter={dateFormat}
                      />
                    )}
                  </CustomContainer>
                </div>
                <div
                  className="col-span-3 row-span-2 col-start-1 row-start-5 dotted-bg cursor-pointer"
                  onClick={() =>
                    setGraphInfo((prev) => ({ ...prev, type: "power" }))
                  }
                >
                  <CustomContainer headingLeft="Power" headingRight={"(KWH)"}>
                    {!utilitiesLoading && graphInfo.loading ? (
                      <Loader />
                    ) : (
                      <GroupBar
                        data={sliceEntries.map(([key, value]) => ({
                          name: key,
                          value1: value.Shift["Shift-A"].Power,
                          value2: value.Shift["Shift-B"].Power,
                          value3: value.Shift["Shift-C"].Power,
                        }))}
                        xFormatter={dateFormat}
                      />
                    )}
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
                    activeCol={activeShiftIndex}
                  />
                </div>
                <div className="col-span-4 row-span-2 col-start-8 row-start-1 bg-[#151419] text-white text-sm dotted-bg">
                  <CustomTables
                    data={data.Production}
                    title="Production"
                    activeCol={activeShiftIndex}
                  />
                </div>
                <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419] dotted-bg">
                  <CustomContainer headingLeft="Daily Production & OEE">
                    {/**  graphInfo.type === "stoptime" ? "Stop Time & OEE" : Daily Production & OEE   */}
                    {!utilitiesLoading && graphInfo.loading ? (
                      <Loader />
                    ) : (
                      <CustomComposed
                        data={Object.entries(graphInfo.data).map(
                          ([key, value]) => ({
                            name: key,
                            value:
                              graphInfo.type === "stoptime" // SWAP ACTION
                                ? value.DAY_PROD_TON
                                : value.KW_PER_TON,
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
                    segmentsStops={[0, 100, 200, 300, 400, 500]}
                    segmentColors={[
                      "#d60c0d",
                      "#fbb103",
                      "#00f806",
                      "#00f806",
                      "#00f806",
                    ]}
                    width={"70%"}
                  />
                </div>
                <div className="col-span-2 row-span-2 col-start-7 row-start-7 dotted-bg">
                  <GauzeWithHeader
                    heading={"Speed"}
                    subHeading={"(Shift-B)"}
                    uom={"Per/min"}
                    value={data.Speed["Shift-B"]}
                    segmentsStops={[0, 100, 200, 300, 400, 500]}
                    segmentColors={[
                      "#d60c0d",
                      "#fbb103",
                      "#00f806",
                      "#00f806",
                      "#00f806",
                    ]}
                  />
                </div>
                <div className="col-span-3 row-span-2 col-start-9 row-start-7 dotted-bg">
                  <GauzeWithHeader
                    heading={"Speed"}
                    subHeading={"(Shift-C)"}
                    uom={"Per/min"}
                    value={data.Speed["Shift-C"]}
                    segmentsStops={[0, 100, 200, 300, 400, 500]}
                    segmentColors={[
                      "#d60c0d",
                      "#fbb103",
                      "#00f806",
                      "#00f806",
                      "#00f806",
                    ]}
                    width={"70%"}
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
