import { Link } from "react-router-dom";
import GauzeWithHeader from "./GauzeWithHeader";
import { useAppContext } from "../appContext";
import { ShiftNameMapping } from "../../constants/shifts";
import HorizontalBar from "../charts/HorizontalBar";

export default function OverviewGrid({ name, value, route }) {
  const { activeShift } = useAppContext();
  const { OEE, OR, Shift_A, Shift_B, Shift_C, RunningStatus } = value;

  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-4 bg-[#d3dae2] mx-4 border-t-2 border-black">
      <div className="col-span-3 row-span-3">
        <div className="text-sm font-bold p-2 gap-4 flex flex-col  bg-transparent my-2 rounded-lg">
          <Link to={route}>
            <span
              className={`${
                RunningStatus ? "bg-[#10c000]" : "bg-[#eb3939]"
              } px-4 py-1 w-max text-bold text-white rounded`}
            >
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
      <div className="col-span-2 row-span-3 col-start-9 py-2">
        <div className="h-full w-full bg-[#d0cab2] pt-2 rounded-lg">
          <HorizontalBar
            data={[
              { name: "Shift-A", value: Shift_A.StopTime },
              { name: "Shift-B", value: Shift_B.StopTime },
              { name: "Shift-C", value: Shift_C.StopTime },
            ]}
            labelColor={"black"}
          />
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-11 bg-transparent rounded-lg flex flex-row justify-center">
        <GauzeWithHeader
          value={value[ShiftNameMapping[activeShift]].Speed}
          redFrom={200}
          redTo={500}
          yellowFrom={100}
          yellowTo={200}
          greenFrom={0}
          greenTo={100}
          hideHeader={true}
        />
        <div>{activeShift}</div>
      </div>
    </div>
  );
}
