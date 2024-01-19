import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../appContext";

export default function Sidebar2({ children }) {
  const { sideBarOpen: show, setSideBarOpen: setShow } = useAppContext();

  return (
    <main
      className={`${show ? "space-toggle pl-[22vw]" : null} mt-12 duration-500`}
    >
      <header
        className={`fixed z-20 top-0 left-0 h-20 w-full flex justify-between bg-[#3d4b68] items-center px-4 py-0 duration-500 ${
          show ? "space-toggle pl-[22vw]" : null
        }`}
      >
        <div
          className="cursor-pointer bg-black p-4 rounded-full"
          onClick={() => setShow(!show)}
        >
          <svg fill="#eb3939" viewBox="0 0 100 80" width="20" height="20">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>
      </header>

      <aside
        className={`fixed top-0 -left-1/3 w-[20vw] h-screen bg-[#3d4b68] pt-4 z-30 duration-500 ${
          show ? "show" : null
        }`}
      >
        <nav className="nav flex flex-col justify-between overflow-hidden h-full">
          <div>
            <Link to="/" className="flex justify-center">
              <div className="w-40 h-40 mt-2 cursor-pointer">
                <img
                  height={"100%"}
                  width={"100%"}
                  src="/images/unilever-white-logo.png"
                  alt="home-icon"
                />
              </div>
            </Link>
            <Link to="/performance-db">
              <div className="flex items-center w-11/12  mt-12 bg-black cursor-pointer rounded-r-full border-l-4 border-[#eb3939] px-2 py-4 text-white font-semibold">
                <div className="bg-gray-600 p-2 flex items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    fill="#eb3939"
                  >
                    <path d="M77.962,65.126H21.107V29.909h56.855V65.126z M55.691,69.246c0,0.436-0.717,0.791-1.61,0.791h-9.096  c-0.879,0-1.604-0.355-1.604-0.791v-0.794h12.31V69.246z M82.478,68.452V27.805c0-1.044-0.857-1.885-1.883-1.885H18.487  c-1.029,0-1.875,0.84-1.875,1.885v40.647h-9.54v2.812c0,1.554,3.046,2.816,4.815,2.816h75.298c1.769,0,4.815-1.262,4.815-2.816  v-2.812H82.478z" />
                  </svg>
                </div>
                <p className="text-sm ml-4">Performance Dashboard</p>
              </div>
            </Link>
            <Link to="/quality-db">
              <div className="flex items-center w-11/12  mt-12 bg-black cursor-pointer rounded-r-full border-l-4 border-[#eb3939] px-2 py-4 text-white font-semibold">
                <div className="bg-gray-600 p-2 flex items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    fill="#eb3939"
                  >
                    <path d="M77.962,65.126H21.107V29.909h56.855V65.126z M55.691,69.246c0,0.436-0.717,0.791-1.61,0.791h-9.096  c-0.879,0-1.604-0.355-1.604-0.791v-0.794h12.31V69.246z M82.478,68.452V27.805c0-1.044-0.857-1.885-1.883-1.885H18.487  c-1.029,0-1.875,0.84-1.875,1.885v40.647h-9.54v2.812c0,1.554,3.046,2.816,4.815,2.816h75.298c1.769,0,4.815-1.262,4.815-2.816  v-2.812H82.478z" />
                  </svg>
                </div>
                <p className="text-sm ml-4">Quality Dashboard</p>
              </div>
            </Link>
          </div>
        </nav>
      </aside>
      {children}
    </main>
  );
}
