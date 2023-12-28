export default function SwitchBoard({ data }) {
  return (
    <div className="pl-4 pr-8">
      <div className="text-right text-xs font-semibold text-[#bd9755] mb-3">
        On/ Off Status
      </div>
      {Object.entries(data).map((entry) => (
        <div
          key={entry[0]}
          className="flex justify-between text-white text-sm mb-4"
        >
          <p>{entry[0]}</p>
          <div className="pr-8">
            <img
              height={20}
              width={20}
              src={`/images/${entry[1] ? "green" : "red"}-round-button.png`}
              alt="round-button"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
