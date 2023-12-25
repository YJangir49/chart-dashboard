import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PerformanceDashboard from "./pages/PerformanceDB";
import QualityDashboard from "./pages/QualityDB";
import TGM from "./reusable/TGM";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/performance-db" element={<PerformanceDashboard />} />
        <Route path="/quality-db" element={<QualityDashboard />} />
        <Route path="/tgm-1" element={<TGM />} />
        <Route path="/tgm-2" element={<TGM />} />
        <Route path="/tgm-3" element={<TGM />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
