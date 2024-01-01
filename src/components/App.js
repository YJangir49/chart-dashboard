import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PerformanceDashboard from "./pages/PerformanceDB";
import TGM from "./reusable/TGM";
import Overview from "./pages/Overview";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/performance-db" element={<PerformanceDashboard />} />
        <Route path="/tgm1" element={<TGM />} />
        <Route path="/tgm2" element={<TGM />} />
        <Route path="/tgm3" element={<TGM />} />
        <Route path="/tgm4" element={<TGM />} />
        <Route path="/n1" element={<TGM />} />
        <Route path="/n2" element={<TGM />} />
        <Route path="/pacmac1" element={<TGM />} />
        <Route path="/pacmac2" element={<TGM />} />
        <Route path="/pacmac3" element={<TGM />} />
        <Route path="/pacmac4" element={<TGM />} />
        <Route path="/pacmac5" element={<TGM />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
