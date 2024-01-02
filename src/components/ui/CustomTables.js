/**
 * data format
 * columns = {id, name}[]
 * rows = {id, name, values: { [columns.name]: value }}[]
 */

import CustomContainer from "../reusable/CustomContainer";

export default function CustomTables({ data, title, subTitle, activeCol }) {
  const columns = Object.keys(Object.values(data)[0]).map((c, index) => ({
    id: index,
    name: c,
  }));

  const rows = Object.keys(data).map((item, index) => ({
    id: index,
    name: item,
    value: data[item],
  }));

  return (
    <CustomContainer headingLeft={title} headingRight={subTitle}>
      <div className="h-full w-full px-2 flex align-middle">
        <table className="w-full border-separate">
          <tr className="text-xs font-[500] text-[#bd9755]">
            <th></th>
            {columns.map((c) => (
              <th key={c.id}>{c.name}</th>
            ))}
          </tr>
          {rows.map((row) => (
            <tr key={row.id} className="">
              <td className="text-xs">{row.name}</td>

              {columns.map((c, index) => (
                <td
                  key={`${row.id}-${c.id}`}
                  className="border border-solid digital-font text-[#10c000] text-center"
                  style={
                    activeCol !== undefined && activeCol !== index
                      ? { color: "gray" }
                      : {}
                  }
                >
                  {row.value[c.name]}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </CustomContainer>
  );
}
