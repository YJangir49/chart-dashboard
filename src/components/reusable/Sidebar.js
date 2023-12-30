import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <img
            src="/images/close-icon.png"
            width={50}
            height={50}
            alt="close-icon"
          />
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed cursor-pointer z-30 flex items-center right-10 top-6"
          fill="#211221"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[25vw] shadow-xl bg-zinc-300 p-10 text-black fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <Link to="/quality-db">
          <h3 className="mt-20 text-2xl cursor-pointer font-semibold">
            Quality Dashboard
          </h3>
        </Link>
        <Link to="/performance-db">
          <h3 className="mt-12 text-2xl cursor-pointer font-semibold">
            Performance Dashboard
          </h3>
        </Link>
      </div>
    </>
  );
}
