import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../reusable/CustomButton";
import SpecificTimeModal from "./SpecificTime";

export default function LogoSection({
  pageName,
  children,
  runningStatus = 0,
  timeData,
  setTimeData,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex h-full flex-col ">
      <div className="flex justify-between p-2">
        <div className="w-16 h-16">
          <img
            height={"100%"}
            width={"100%"}
            src="/images/unilever-logo.png"
            alt="logo"
          />
        </div>

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

      <div className="flex flex-col flex-1 justify-end">
        <div className="flex justify-between items-center px-2 font-bold">
          <p className="text-xs">Log-Time</p>
          <div className="flex items-center text-xs gap-4 relative">
            <label
              className="flex align-middle gap-1"
              onClick={() => {
                if (!timeData.live) {
                  setTimeData({
                    ...timeData,
                    live: true,
                    date: new Date(),
                    noOfDays: 10,
                  });
                }
              }}
            >
              <input type="radio" value="live" checked={timeData.live} />
              Live
            </label>

            <label
              className="flex align-middle gap-1"
              onClick={() => setShow(true)}
            >
              <input type="radio" checked={!timeData.live} />
              Specific Time
            </label>
            {show && (
              <SpecificTimeModal
                show={show}
                currentDate={timeData.date}
                noOfDays={timeData.noOfDays}
                onClose={() => setShow(false)}
                onSave={({ selectedDate, noOfDays }) => {
                  setTimeData({
                    ...timeData,
                    live: false,
                    date: selectedDate,
                    noOfDays,
                  });
                  setShow(false);
                }}
              />
            )}
          </div>
        </div>
        {children}
      </div>

      {pageName === "Quality" && (
        <select name="cars" id="cars" className="mt-8">
          <option value="m-1">Mixer-1</option>
          <option value="m-2">Mixer-2</option>
          <option value="m-3">Mixer-3</option>
          <option value="m-4">Mixer-4</option>
          <option value="m-5">Mixer-5</option>
        </select>
      )}
    </div>
  );
}
