export default function CustomCard({ name }) {
  return (
    <div class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative flex items-center justify-center mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <div>
          <p className="text-2xl text-center font-bold">{name}</p>
          <p className="text-sm text-center font-medium">OEE</p>
          <p className="text-sm text-center font-medium">OR</p>
        </div>
      </div>
      <div class="p-4">
        <table class="table-auto text-xs w-full">
          <thead className="text-left bg-blue-500 font-normal text-white">
            <tr>
              <th>Shift</th>
              <th>Production</th>
              <th>Power</th>
              <th>Stop-Time</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody className="my-4 font-medium">
            <tr>
              <td>A</td>
              <td>12332</td>
              <td>12332</td>
              <td>150 min</td>
              <td>312 Per/min</td>
            </tr>
            <tr>
              <td>B</td>
              <td>65743</td>
              <td>65743</td>
              <td>132 min</td>
              <td>0 Per/min</td>
            </tr>
            <tr>
              <td>C</td>
              <td>87653</td>
              <td>65743</td>
              <td>170 min</td>
              <td>0 Per/min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
