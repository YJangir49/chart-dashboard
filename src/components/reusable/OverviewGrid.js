import { useState } from "react";
import { Link } from "react-router-dom";
import GauzeWithHeader from "./GauzeWithHeader";

export default function OverviewGrid({ name, value, route }) {
  const [graphInfo, setGraphInfo] = useState({
    loading: false,
    data: {},
    shift: "Shift-A",
  });
  const { OEE, OR, Shift_A, Shift_B, Shift_C } = value;
  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-4 bg-[#d3dae2] mx-4 border-t-2 border-black my-2">
      <div className="col-span-3 row-span-3">
        <div className="text-sm font-bold p-2 gap-4 flex flex-col  bg-transparent my-2 rounded-lg">
          <Link to={route}>
            <span className="bg-[#10c000] px-4 py-1 w-max text-bold text-white rounded">
              {name}
            </span>
          </Link>
          <p>OEE:- {OEE}%</p>
          <p>OR:- {OR}%</p>
        </div>
      </div>
      <div className="row-span-3 col-start-4">
        <div className="text-sm text-center font-bold p-2 gap-4 flex flex-col bg-[#b3d5d4] my-2 rounded-lg">
          <p>A</p>
          <p>B</p>
          <p>C</p>
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-5">
        <div className="text-sm font-bold p-2 gap-4 flex flex-col bg-[#e7c3cd] my-2 rounded-lg">
          <p>{Shift_A.Production}</p>
          <p>{Shift_B.Production}</p>
          <p>{Shift_C.Production}</p>
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-7">
        <div className="text-sm font-bold p-2 gap-4 flex flex-col bg-[#a6d1d8] my-2 rounded-lg">
          <p>{Shift_A.Power}</p>
          <p>{Shift_B.Power}</p>
          <p>{Shift_C.Power}</p>
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-9">
        <div className="text-sm font-bold p-2 gap-4 flex flex-col bg-[#d0cab2] my-2 rounded-lg">
          <p>{Shift_A.StopTime}</p>
          <p>{Shift_B.StopTime}</p>
          <p>{Shift_C.StopTime}</p>
        </div>
      </div>
      <div
        className="col-span-2 row-span-3 col-start-11 bg-transparent rounded-lg dotted-bg"
        onClick={() => setGraphInfo((prev) => ({ ...prev, shift: "Shift-A" }))}
      >
        {/* <div className="dotted-bg cursor-pointer"> */}
        <GauzeWithHeader
          heading={"Speed"}
          subHeading={"(Shift-A)"}
          uom={"Per/min"}
          value={Shift_A.Speed}
          // value={data.Speed["Shift-A"]}
          redFrom={200}
          redTo={500}
          yellowFrom={100}
          yellowTo={200}
          greenFrom={0}
          greenTo={100}
        />
        {/* </div> */}
      </div>
    </div>
  );
}
