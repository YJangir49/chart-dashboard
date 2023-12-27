export default function SwitchBoard() {
  return (
    <div className="pl-4 pr-8">
      <div className="text-right text-xs font-semibold text-[#bd9755] mb-3">
        On/ Off Status
      </div>
      <div className="flex justify-between text-white text-sm">
        <p>Pressure Switch 1</p>
        <div className="pr-8">
          <img
            height={20}
            width={20}
            src="/images/red-round-button.png"
            alt="round-button"
          />
        </div>
      </div>
      <div className="flex justify-between text-white text-sm my-4">
        <p>Pressure Switch 2</p>
        <div className="pr-8">
          <img
            height={20}
            width={20}
            src="/images/red-round-button.png"
            alt="round-button"
          />
        </div>
      </div>
      <div className="flex justify-between text-white text-sm">
        <p>Pressure Switch 3</p>
        <div className="pr-8">
          <img
            height={20}
            width={20}
            src="/images/green-round-button2.png"
            alt="round-button"
          />
        </div>
      </div>
    </div>
  );
}
