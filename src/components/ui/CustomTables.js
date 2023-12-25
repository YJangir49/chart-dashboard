export default function CustomTables({ tableData, tableTitle, subHeading }) {
  return (
    <div className="h-full w-full px-2">
      <div className="bg-black flex justify-between">
        <p className="text-xs text-[#91b9a2]">{tableTitle}</p>
        {subHeading && <p className="text-xs text-[#91b9a2]">{subHeading}</p>}
      </div>
      <table className="w-full border-separate">
        <tr className="text-xs font-[500] text-[#bd9755]">
          <th></th>
          <th>Batch No.</th>
          <th>PH</th>
          <th>Viscosity</th>
        </tr>
        {tableData.map((item) => (
          <tr className="">
            <td className="text-xs">{item?.item1}</td>
            <td className="border border-solid digital-font text-center">
              {item?.item2}
            </td>
            <td className="border border-solid digital-font text-center">
              {item?.item3}
            </td>
            <td className="border border-solid digital-font text-center">
              {item?.item4}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
