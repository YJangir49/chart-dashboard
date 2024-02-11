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
                <p className="text-base ml-4">Performance Dashboard</p>
              </div>
            </Link>
            <Link to="/quality-db">
              <div className="flex items-center w-11/12  mt-12 bg-black cursor-pointer rounded-r-full border-l-4 border-[#eb3939] px-2 py-4 text-white font-semibold">
                <div className="bg-gray-600 p-2 flex items-center rounded-full">
                  <svg
                    fill="#eb3939"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 97.778 97.778"
                  >
                    <g>
                      <g>
                        <path
                          d="M48.889,17.221C21.932,17.221,0,39.152,0,66.109c0,3.652,0.418,7.334,1.244,10.94c0.47,2.052,2.296,3.508,4.401,3.508
			h86.488c2.104,0,3.932-1.456,4.401-3.508c0.825-3.606,1.244-7.288,1.244-10.94C97.778,39.152,75.846,17.221,48.889,17.221z
			 M48.889,24.526c2.832,0,5.134,2.303,5.134,5.133c0,1.371-0.534,2.66-1.504,3.63c-0.969,0.969-2.258,1.503-3.628,1.503
			c-2.83,0-5.134-2.303-5.135-5.133C43.755,26.828,46.058,24.526,48.889,24.526z M10.589,73.092c-2.83,0-5.133-2.303-5.133-5.133
			s2.303-5.133,5.133-5.133c2.831,0,5.134,2.303,5.134,5.133S13.42,73.092,10.589,73.092z M25.437,44.506
			c-0.969,0.97-2.258,1.504-3.629,1.504s-2.661-0.534-3.63-1.504c-0.969-0.969-1.503-2.258-1.503-3.629
			c0-1.371,0.534-2.66,1.504-3.63c0.97-0.97,2.259-1.504,3.63-1.504s2.66,0.534,3.629,1.503c0.97,0.97,1.504,2.259,1.504,3.63
			C26.942,42.247,26.407,43.537,25.437,44.506z M54.061,74.302c-5.846,2.799-12.881,0.317-15.68-5.53
			c-2.798-5.848-4.25-36.12-4.25-36.12s22.664,20.121,25.461,25.967C62.391,64.47,59.909,71.504,54.061,74.302z M79.602,44.506
			c-0.971,0.97-2.26,1.504-3.631,1.504s-2.66-0.534-3.629-1.504c-0.97-0.969-1.502-2.258-1.502-3.629
			c0-1.371,0.533-2.661,1.502-3.63c0.969-0.969,2.258-1.503,3.629-1.503s2.66,0.534,3.631,1.504c0.97,0.97,1.502,2.259,1.504,3.63
			C81.104,42.248,80.57,43.537,79.602,44.506z M87.189,73.092c-2.831,0-5.135-2.303-5.135-5.133s2.304-5.133,5.135-5.133
			c2.83,0,5.133,2.303,5.133,5.133S90.02,73.092,87.189,73.092z"
                        />
                        <path
                          d="M47.083,59.72c-2.193,1.05-3.124,3.688-2.074,5.88c1.049,2.194,3.687,3.124,5.879,2.074
			c2.193-1.049,3.123-3.688,2.074-5.881C51.913,59.601,49.276,58.67,47.083,59.72z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="text-base ml-4">Quality Dashboard</p>
              </div>
            </Link>
          </div>
        </nav>
      </aside>
      {children}
    </main>
  );
}
