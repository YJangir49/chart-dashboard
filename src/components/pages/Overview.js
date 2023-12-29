import CustomCard from "../reusable/CustomCard";

const cardData = [
  { id: "1", name: "TGM-1" },
  { id: "2", name: "TGM-2" },
  { id: "3", name: "TGM-3" },
  { id: "4", name: "TGM-4" },
  { id: "5", name: "NORDEN-1" },
  { id: "6", name: "NORDEN-1" },
  { id: "7", name: "PACMAC-1" },
  { id: "8", name: "PACMAC-2" },
  { id: "9", name: "PACMAC-3" },
  { id: "10", name: "PACMAC-4" },
  { id: "11", name: "PACMAC-5" },
];

export default function Overview() {
  return (
    <div className="">
      <h1 className="px-4 pt-8 text-center text-3xl font-bold">Overview</h1>
      <div className="my-8 flex flex-wrap">
        {cardData.map((item) => (
          <div className="w-1/4 px-4 py-6">
            <CustomCard name={item.name} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
