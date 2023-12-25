import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="">
      <nav className="flex justify-between items-center bg-[#c0daf0] px-8 py-2">
        <div>
          <img
            height={40}
            width={40}
            src="/images/unilever-logo.png"
            alt="logo"
          />
        </div>
        <ul className="flex">
          <li>Main Menu</li>
          <li>Erase History</li>
          <li>Settings</li>
          <li>PlantManager</li>
        </ul>
      </nav>
      <div className="bg-[#313c72] text-center py-2 m-4 rounded-full">
        <h3 className="text-xl font-semibold text-[#34cdc5]">Main Menu</h3>
        <p className="text-xs font-semibold text-white">
          (Select Dashboard/Unit)
        </p>
      </div>

      <div>
        <ul className="ml-6 flex gap-4 cursor-pointer">
          <Link to="/tgm-3">
            <li className="bg-cyan-300 p-4">TGM - 1</li>
          </Link>
          <Link to="/tgm-2">
            <li className="bg-pink-300 p-4">TGM - 2</li>
          </Link>
          <Link to="/tgm-3">
            <li className="bg-violet-300 p-4">TGM - 3</li>
          </Link>
          <Link to="/performance-db">
            <li className="bg-orange-300 p-4">Performance Dashboard</li>
          </Link>
          <Link to="/quality-db">
            <li className="bg-green-300 p-4">Quality Dashboard</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
