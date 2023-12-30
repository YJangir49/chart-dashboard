// import LogoImage from "../../../public/Unilever-logo.svg";

import { Link } from "react-router-dom";
import CustomButton from "../reusable/CustomButton";

export default function LogoSection({ pageName, isLive, setIsLive, children }) {
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
          <CustomButton name={pageName} />
          <Link to="/">
            <div className="w-8 h-8 mt-2 cursor-pointer">
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
            <label className="flex align-middle gap-1">
              <input
                type="radio"
                value="live"
                checked={isLive}
                onChange={() => setIsLive(true)}
              />
              Live
            </label>

            <label className="flex align-middle gap-1">
              <input
                type="radio"
                value="specificTime"
                checked={!isLive}
                onChange={() => setIsLive(false)}
              />
              Specific Time
            </label>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
