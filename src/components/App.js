import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PerformanceDashboard from "./pages/PerformanceDB";
import QualityDashboard from "./pages/QualityDB";
import TGM1 from "./pages/TGM1";
import TGM2 from "./pages/TGM2";
import TGM3 from "./pages/TGM3";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/performance-db" element={<PerformanceDashboard />} />
        <Route path="/quality-db" element={<QualityDashboard />} />
        <Route path="/tgm-1" element={<TGM1 />} />
        <Route path="/tgm-2" element={<TGM2 />} />
        <Route path="/tgm-3" element={<TGM3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
