import React from "react";
import CustomBar from "./charts/CustomBar";
import CustomComposed from "./charts/CustomComposed";
import CustomGroupBar from "./charts/GroupBar";

const App = () => {
  return (
    <div className="h-screen w-screen bg-black ">
      <h1>Welcome to dashboaard</h1>
      <div className="p-4">
        <CustomBar />
      </div>
      <div className="p-4">
        <CustomComposed />
      </div>
      <div className="p-4">
        <CustomGroupBar />
      </div>
    </div>
  );
};

export default App;
