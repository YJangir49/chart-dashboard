import React, { useEffect, useState } from "react";
import LogoSection from "../ui/LogoSection";
import CustomContainer from "../reusable/CustomContainer";
import { APP_URL } from "../../constants/url";
import axios from "axios";
import { addDays } from "date-fns";
import { MIXERS, MIXER_TYPE_MAP } from "../../constants/mixer";
import Loader from "../reusable/Loader";
import Multiline from "../charts/MultilineGraph";
import {
  MIXER_CYCLE_DATA_TIME,
  MIXER_LIVE_DATA_RENEW_TIME,
} from "../../constants/config";

const QualityDB = () => {
  const [loading, setLoading] = useState(true);

  const [mixer, setMixer] = useState(MIXERS.m1);
  const [autoRotateMixers, setAutoRotateMixers] = useState(false);
  const [data, setData] = useState([]);

  const [timeData, setTimeData] = useState({
    live: true,
    date: new Date(),
    noOfDays: 10,
  });

  useEffect(() => {
    // This code block will set new Date in every one minutes for live data
    let interval;
    if (autoRotateMixers) {
      const mixers = Object.values(MIXERS);
      const currentMixerIndex = mixers.findIndex((m) => m === mixer);
      let nextMixer =
        currentMixerIndex === mixers.length - 1
          ? mixers[0]
          : mixers[currentMixerIndex + 1];

      interval = setInterval(() => {
        setMixer(nextMixer);
      }, MIXER_CYCLE_DATA_TIME);
    }
    return () => clearInterval(interval);
  }, [autoRotateMixers, mixer]);

  useEffect(() => {
    // This code block will set new Date in every one minutes for live data
    let liveDataRenewIntervalId;
    if (timeData.live) {
      liveDataRenewIntervalId = setInterval(() => {
        setTimeData((prev) => ({ ...prev, date: new Date() }));
      }, MIXER_LIVE_DATA_RENEW_TIME);
    }
    return () => clearInterval(liveDataRenewIntervalId);
  }, [timeData.live]);

  useEffect(() => {
    setLoading(true);
    const endDate = timeData.date.getTime();
    const startDate = addDays(timeData.date, -timeData.noOfDays).getTime();
    const body = {
      startDate,
      endDate,
      type: mixer,
    };
    axios
      .post(`${APP_URL}/tp/mixer`, body)
      .then((response) => {
        if (response) {
          const data = response.data;
          console.log("QDB-data", data);
          setData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [timeData.live, mixer, timeData.date, timeData.noOfDays]);

  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center p-2"
      style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
    >
      {loading && (
        <>
          <div className="absolute inset-0 bg-black opacity-90 z-40"></div>
          <Loader className="bg-white" />
        </>
      )}
      <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
        <div className="col-span-3 row-span-3">
          <LogoSection
            pageName={"Quality"}
            timeData={timeData}
            setTimeData={setTimeData}
            runningStatus={1} //Replace key from the running status key from api response
          >
            <p className="mt-6 text-sm font-bold ml-2">Date: 23-jan-2024</p>
            <select
              className="mt-8"
              value={mixer}
              onChange={(e) => setMixer(e.target.value)}
            >
              <option value={MIXERS.m1}>{MIXER_TYPE_MAP[MIXERS.m1]}</option>
              <option value={MIXERS.m2}>{MIXER_TYPE_MAP[MIXERS.m2]}</option>
              <option value={MIXERS.m3}>{MIXER_TYPE_MAP[MIXERS.m3]}</option>
              <option value={MIXERS.m4}>{MIXER_TYPE_MAP[MIXERS.m4]}</option>
              <option value={MIXERS.m5}>{MIXER_TYPE_MAP[MIXERS.m5]}</option>
            </select>
            <div className="mt-12 flex items-center gap-2">
              <p className="font-bold text-sm">Auto-rotate All Mixers:</p>

              <input
                className="mt-1 ml-2"
                type="checkbox"
                checked={autoRotateMixers}
                onChange={() => setAutoRotateMixers((prev) => !prev)}
              />
            </div>
          </LogoSection>
        </div>

        <div className="col-span-8 row-span-4 col-start-4 row-start-1 bg-[#151419] dotted-bg">
          <CustomContainer
            headingLeft="PH-Value Trend"
            headingRight="(last 20 batches)"
            headingCenter={MIXER_TYPE_MAP[mixer]}
          >
            <Multiline data={data} name="BATCH" value={"PH"} min={6} max={8} />
          </CustomContainer>
        </div>

        <div className="col-span-8 row-span-4 col-start-4 row-start-5 bg-[#151419] dotted-bg">
          <CustomContainer
            headingLeft="Viscosity-Value Trend"
            headingRight="(last 20 batches)"
            headingCenter={MIXER_TYPE_MAP[mixer]}
          >
            <Multiline
              data={data}
              name="BATCH"
              value={"VISCOSITY"}
              min={120000}
              max={150000}
            />
          </CustomContainer>
        </div>
      </div>
    </div>
  );
};

export default QualityDB;
