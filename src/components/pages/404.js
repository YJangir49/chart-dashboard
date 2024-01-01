import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  console.log("I rendered");
  return (
    <div
      className="w-full h-screen bg-cover bg-center p-10"
      style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
    >
      <h1 className="text-2xl font-bold">404 Not Found</h1>
      <p className="text-sm font-medium">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" replace>
        <button className="bg-black text-white mt-3 p-2 shadow-xl shadow-slate-700">
          Return to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
