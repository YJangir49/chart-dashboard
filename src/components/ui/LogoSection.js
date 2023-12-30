// import LogoImage from "../../../public/Unilever-logo.svg";

import { Link } from "react-router-dom";
import CustomButton from "../reusable/CustomButton";

export default function LogoSection({ isLive, setIsLive, children }) {
  return (
    <>
      <div className="flex justify-between p-2">
        <div className="w-14 h-14">
          <img
            height={"100%"}
            width={"100%"}
            src="/images/unilever-logo.png"
            alt="logo"
          />
        </div>

        <div className="flex">
          <CustomButton />
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
      <div className="flex justify-between items-center px-2">
        <p className="text-xs">Log-Time</p>
        {/* <div className="text-xs flex">
          <p>Live</p>
          <p>Specific-Time</p>
        </div> */}

        <form action="" className="flex items-center text-xs gap-2">
          <input
            type="radio"
            id="vehicle1"
            name="vehicle1"
            value={isLive}
            onClick={() => setIsLive(true)}
          />
          <label for="vehicle1" className="">
            Live
          </label>

          <input
            type="radio"
            id="vehicle3"
            name="vehicle3"
            value={!isLive}
            onClick={() => setIsLive(false)}
          />
          <label for="vehicle3" className="">
            Specific-Time
          </label>
        </form>
      </div>
      {children}
    </>
  );
}
