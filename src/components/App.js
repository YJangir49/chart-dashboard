import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PerformanceDashboard from "./pages/PerformanceDB";
import Overview from "./pages/Overview";
import NotFound from "./pages/404";
import MachineErrorBoundary from "./pages/MachineErrorHandler";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Overview />} />
        <Route path="/performance-db" element={<PerformanceDashboard />} />
        <Route path="/tp/:machineId" element={<MachineErrorBoundary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
