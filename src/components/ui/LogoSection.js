import { Link } from "react-router-dom";
import CustomButton from "../reusable/CustomButton";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function LogoSection({
  pageName,
  isLive,
  onLiveChange,
  children,
  runningStatus = 0,
}) {
  const [show, setShow] = useState();

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

      <div className="flex flex-col flex-1  justify-end">
        <div className="flex justify-between items-center px-2 font-bold">
          <p className="text-xs">Log-Time</p>
          <div className="flex items-center text-xs gap-4 ">
            <label
              className="flex align-middle gap-1"
              onClick={() => onLiveChange({ live: true, date: new Date() })}
            >
              <input type="radio" value="live" checked={isLive} />
              Live
            </label>

            <label
              className="flex align-middle gap-1"
              onClick={() => setShow(true)}
            >
              <DatePicker
                open={show}
                onChange={(date) => {
                  onLiveChange({ live: false, date });
                  setShow(false);
                }}
                onClickOutside={() => setShow(false)}
                showPopperArrow={false}
                maxDate={new Date()}
              />
              <input type="radio" checked={!isLive} />
              Specific Time
            </label>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
