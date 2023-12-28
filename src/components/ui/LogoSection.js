// import LogoImage from "../../../public/Unilever-logo.svg";

import CustomButton from "../reusable/CustomButton";

export default function LogoSection({ children }) {
  return (
    <>
      <div className="flex justify-between p-2">
        <img
          height={60}
          width={60}
          src="/images/unilever-logo.png"
          alt="logo"
        />
        <CustomButton />
      </div>
      <div className="flex justify-between items-center px-2">
        <p className="text-xs">Log-Time</p>
        {/* <div className="text-xs flex">
          <p>Live</p>
          <p>Specific-Time</p>
        </div> */}

        <form action="" className="flex items-center text-xs gap-2">
          <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1" className="">
            Live
          </label>

          <input type="radio" id="vehicle3" name="vehicle3" value="Boat" />
          <label for="vehicle3" className="">
            Specific-Time
          </label>
        </form>
      </div>
      {children}
    </>
  );
}
