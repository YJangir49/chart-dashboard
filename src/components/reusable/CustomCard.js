import { Link } from "react-router-dom";

export default function CustomCard({ name, value, route }) {
  const { OEE, OR, Shift_A, Shift_B, Shift_C } = value;
  return (
    <Link to={route}>
      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative flex items-center justify-center mx-4 -mt-6 h-40 overflow-hidden rounded-xl dotted-bg  text-white shadow-lg">
          <div>
            <p className="text-2xl text-center font-bold">{name}</p>
            <p className="text-sm text-center font-medium">OEE: {OEE}%</p>
            <p className="text-sm text-center font-medium">OR: {OR}%</p>
          </div>
        </div>
        <div className="p-4">
          <table className="table-auto text-xs w-full">
            <thead className="text-left bg-gradient-to-br dotted-bg font-normal text-white">
              <tr>
                <th>Shift</th>
                <th>Production</th>
                <th>Power</th>
                <th>Stop-Time</th>
                <th>Speed</th>
              </tr>
            </thead>
            <tbody className="my-4 text-sm font-medium">
              <tr>
                <td>A</td>
                <td className="font-black">{Shift_A.Production}</td>
                <td>{Shift_A.Power}</td>
                <td>{Shift_A.StopTime} min</td>
                <td>{Shift_A.Speed} Per/min</td>
              </tr>
              <tr>
                <td>B</td>
                <td className="font-black">{Shift_B.Production}</td>
                <td>{Shift_B.Power}</td>
                <td>{Shift_B.StopTime} min</td>
                <td>{Shift_B.Speed} Per/min</td>
              </tr>
              <tr>
                <td>C</td>
                <td className="font-black">{Shift_C.Production}</td>
                <td>{Shift_C.Power}</td>
                <td>{Shift_C.StopTime} min</td>
                <td>{Shift_C.Speed} Per/min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
}
