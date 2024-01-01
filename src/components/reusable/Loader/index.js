import React from "react";
import "./loader.css";

const Loader = ({ dotStyle = {} }) => {
  return (
    <div className="loader-container">
      <div className="dot-container">
        <div className={`dot dot1`} style={dotStyle}></div>
        <div className={`dot dot2`} style={dotStyle}></div>
        <div className={`dot dot3`} style={dotStyle}></div>
      </div>
    </div>
  );
};

export default Loader;
