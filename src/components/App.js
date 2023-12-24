import React from "react";
import CustomBar from "./charts/CustomBar";
import CustomComposed from "./charts/CustomComposed";
import CustomGroupBar from "./charts/GroupBar";
import HorizontalBar from "./charts/HorizontalBar";

const App = () => {
  return (
    <div className="bg-black flex flex-wrap justify-center ">
      <div className="p-4">
        <CustomBar />
      </div>
      <div className="p-4">
        <CustomComposed />
      </div>
      <div className="p-4">
        <CustomGroupBar />
      </div>
      <div className="p-4">
        <HorizontalBar />
      </div>
    </div>
  );
};

export default App;
