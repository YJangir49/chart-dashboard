import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../reusable/CustomButton";
import SpecificTimeModal from "./SpecificTime";
import { useAppContext } from "../appContext";

export default function LogoSection({
  pageName,
  children,
  runningStatus = 0,
  noOfDays,
  setNoOfDays,
}) {
  const [show, setShow] = useState(false);
  const {
    backendDate,
    systemDate,
    live,
    setLive,
    setSystemDate,
    setHistoricDate,
  } = useAppContext();

  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-between p-2">
        <div className="w-16 h-16">
          <img
            height={"100%"}
            width={"100%"}
            src="/images/unilever-logo.png"
            alt="logo"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <CustomButton name={pageName} status={runningStatus} />
            <Link to="/">
              <div className="w-8 h-8 mt-2 ml-2 cursor-pointer">
                <img
                  height={"100%"}
                  width={"100%"}
                  src="/images/home-icon.png"
                  alt="home-icon"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-end">
        {!live && backendDate && (
          <p className="text-sm text-slate-900 font-bold py-1 text-end">
            Date: {backendDate.toLocaleString()}
          </p>
        )}
        <div className="flex justify-between items-center px-2 font-bold">
          <p className="text-xs">Log-Time</p>
          <div className="flex items-center text-xs gap-4 relative">
            <label
              className="flex align-middle gap-1"
              onClick={() => {
                if (!live) {
                  setLive(true);
                  setSystemDate(new Date());
                  setHistoricDate(new Date());
                  setNoOfDays(10);
                }
              }}
            >
              <input type="radio" value="live" checked={live} />
              Live
            </label>

            <label
              className="flex align-middle gap-1"
              onClick={() => setShow(true)}
            >
              <input type="radio" checked={!live} />
              Specific Time
            </label>
            {show && (
              <SpecificTimeModal
                show={show}
                currentDate={systemDate}
                noOfDays={noOfDays}
                onClose={() => setShow(false)}
                onSave={({ selectedDate, noOfDays }) => {
                  setSystemDate(selectedDate);
                  setHistoricDate(selectedDate);
                  setNoOfDays(noOfDays);
                  setLive(false);
                  setShow(false);
                }}
              />
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
