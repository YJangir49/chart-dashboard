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
import { dateFormat, findTimeDifference } from "../../utils/date";
import { APP_URL } from ".././../constants/url";
import { addDays } from "date-fns";
import Loader from "../reusable/Loader";
import { useAppContext } from "../appContext";
import { CHANGE_DB_METER_TYPE } from "../../constants/config";

export default function PerformanceDashboard() {
  const [pageLoading, setPageLoding] = useState(true);
  const [utilitiesLoading, setUtilitiesLoding] = useState(true);

  const [dbMeterLoading, setDBMeterLoading] = useState(true);
  const [utility, setUtilityData] = useState();
  const [barData, setBarData] = useState([]);
  const {
    live,
    systemDate,
    activeShiftIndex,
    setBackendDate,
    setLive,
    setSystemDate,
    historicDate,
    setHistoricDate,
    showLoader,
    setLoaderVisibility,
  } = useAppContext();

  const [graphInfo, setGraphInfo] = useState({
    loading: false,
    type: "power",
    unit: "KWH/ton",
    label: "Power Consumption",
  });

  const [noOfDays, setNoOfDays] = useState(10);

  const [meterData, setMeterData] = useState({
    data: [],
    meter: "",
    hours: 0,
    meters: [],
  });

  const getHoursString = () => {
    if (meterData.hours) {
      return `Past ${parseInt(meterData.hours)} hours`;
    }
    return "";
  };

  useEffect(() => {
    return () => {
      setLive(true);
      setSystemDate(new Date());
      setHistoricDate(new Date());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let changeDBMeterInterval = setInterval(() => {
      let currentMeter = "";
      if (meterData.meter) {
        const currentMeterIndex = meterData.meters.findIndex(
          (meter) => meterData.meter === meter
        );
        if (currentMeterIndex === -1) {
          currentMeter = meterData.meter || "";
        } else if (currentMeterIndex === meterData.meters.length - 1) {
          currentMeter = meterData.meters[0];
        } else currentMeter = meterData.meters[currentMeterIndex + 1];
      }
      setMeterData((prev) => ({ ...prev, meter: currentMeter }));
    }, CHANGE_DB_METER_TYPE);
    return () => clearInterval(changeDBMeterInterval);
  }, [meterData.meters, meterData.meter]);

  useEffect(() => {
    const fetchUtitlityConstants = async () => {
      try {
        setUtilitiesLoding(true);
        const response = live
          ? await axios.get(`${APP_URL}/tp/utility/constants`)
          : await axios.post(`${APP_URL}/tp/utility/constants`, {
              startDate: systemDate.getTime(),
            });
        if (response) {
          const data = response.data;
          setUtilityData(data);
          if (data?.DateAndTime) setBackendDate(new Date(data.DateAndTime));
        }
      } catch (err) {
        console.log(err);
      }
      setPageLoding(false);
      setUtilitiesLoding(false);
      if(showLoader && live){
        setLoaderVisibility(false)
      }
    };

    fetchUtitlityConstants();
    // eslint-disable-next-line
  }, [systemDate, setBackendDate]);

  useEffect(() => {
    // This block will fetch data for the tp historical graph on any dependency change
    const endDate = historicDate.getTime();
    const startDate = addDays(historicDate, -noOfDays).getTime();
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
  }, [graphInfo.type, historicDate, noOfDays]);

  useEffect(() => {
    const fetchDBMeterData = async (intervalId) => {
      try {
        setDBMeterLoading(true);
        const endDate = systemDate.getTime();
        const startDate = addDays(systemDate, -noOfDays).getTime();

        const response = await axios.post(`${APP_URL}/tp/utility/dbmeter`, {
          startDate,
          endDate,
        });

        if (response) {
          const data = response.data;
          const meters = data[0]
            ? Object.keys(data[0]).filter((key) => key !== "Date")
            : [];
          if (data.length > 1) {
            const timeDiff =
              findTimeDifference(data[0].Date, data[data.length - 1].Date) / 60;
            setMeterData({
              data,
              meter: meterData.meter || meters[0],
              hours: timeDiff,
              meters,
            });
          } else
            setMeterData({
              data,
              meter: meterData.meter || meters[0],
              hours: 0,
              meters,
            });
        }
      } catch (err) {
        if (intervalId) clearInterval(intervalId);
        console.log(err);
      }
      setDBMeterLoading(false);
    };
    fetchDBMeterData();
    // fetch on date range change for the graph
    // eslint-disable-next-line
  }, [systemDate, noOfDays]);

  if (!pageLoading && !utility) {
    return <></>;
  }

  return (
    <>
      <div
        className="w-full bg-no-repeat bg-cover bg-center p-2"
        style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
      >
        {pageLoading ? (
          <div className="h-screen">
            <Loader dotStyle={{ backgroundColor: "black" }} />
          </div>
        ) : (
          <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
            {showLoader && utilitiesLoading && (
              <>
                <div className="absolute inset-0 bg-black opacity-90 z-40"></div>
                <Loader className="bg-white" />
              </>
            )}
            <div className="col-span-3 row-span-2">
              <LogoSection
                pageName={"TP"}
                noOfDays={noOfDays}
                setNoOfDays={setNoOfDays}
                runningStatus={1} //Replace key from the running status key from api response
              >
                <div className="h-[10%]" />
              </LogoSection>
            </div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-3 bg-[#151419] dotted-bg">
              <CustomContainer headingLeft="Sound" headingRight="dB">
                <CustomPie data={utility?.Sound} title="Sound" unit={"db"} />
              </CustomContainer>
            </div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-5 bg-[#151419]  dotted-bg">
              <CustomContainer
                headingLeft={`dB ${meterData.meter || "meter"}`}
                headingRight={getHoursString()}
              >
                {!utilitiesLoading && dbMeterLoading ? (
                  <Loader />
                ) : (
                  <CustomLine //DB Meter graph logic
                    data={meterData.data}
                    value={meterData.meter}
                    name={"Date"}
                    xFormatter={dateFormat}
                  />
                )}
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
                activeCol={activeShiftIndex}
              />
            </div>
            <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419]  dotted-bg">
              <CustomContainer
                headingLeft={graphInfo.label}
                headingRight={graphInfo.unit}
              >
                {!utilitiesLoading && graphInfo.loading ? (
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
                segmentsStops={[0, 1000, 2000, 3000, 4000, 5000]}
                segmentColors={[
                  "#00f806",
                  "#fbb103",
                  "#d60c0d",
                  "#d60c0d",
                  "#d60c0d",
                ]}
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
                minValue={0}
                segmentsStops={[0, 300, 600, 800, 1000]}
                segmentColors={["#d60c0d", "#fbb103", "#00f806", "#00f806"]}
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
                minValue={0}
                segmentsStops={[0, 1000, 2000, 3000, 4000, 5000]}
                segmentColors={[
                  "#d60c0d",
                  "#fbb103",
                  "#00f806",
                  "#00f806",
                  "#00f806",
                ]}
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
                minValue={0}
                maxValue={500}
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
          </div>
        )}
      </div>
    </>
  );
}
