import { Link } from "react-router-dom";
import CustomCard from "../reusable/CustomCard";
import Sidebar from "../reusable/Sidebar";

const cardData = [
  { id: "1", name: "TGM-1", route: "/tgm-1" },
  { id: "2", name: "TGM-2", route: "/tgm-2" },
  { id: "3", name: "TGM-3", route: "/tgm-3" },
  { id: "4", name: "TGM-4", route: "/tgm-4" },
  { id: "5", name: "NORDEN-1", route: "/norden-1" },
  { id: "6", name: "NORDEN-2", route: "/norden-2" },
  { id: "7", name: "PACMAC-1", route: "/pacmac-1" },
  { id: "8", name: "PACMAC-2", route: "/pacmac-2" },
  { id: "9", name: "PACMAC-3", route: "/pacmac-3" },
  { id: "10", name: "PACMAC-4", route: "/pacmac-4" },
  { id: "11", name: "PACMAC-5", route: "/pacmac-5" },
];

export default function Overview() {
  return (
    <div className="">
      <Sidebar />
      <h1 className="px-4 pt-8 pl-8 text-3xl font-bold">Overview</h1>
      <div className="my-8 flex flex-wrap">
        {cardData.map((item) => (
          <div className="w-1/4 px-4 py-6">
            <Link to={item.route}>
              <CustomCard name={item.name} key={item.id} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
