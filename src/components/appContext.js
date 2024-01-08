import React, { createContext, useContext, useEffect, useState } from "react";
import { ShiftTimings } from "../constants/shifts";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeShift, setActiveShift] = useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    const getCurrentShift = () => {
      const currentHour = new Date().getHours();
      if (
        currentHour >= ShiftTimings["Shift-A"].start &&
        currentHour < ShiftTimings["Shift-A"].end
      ) {
        setActiveShift("Shift-A");
      } else if (
        currentHour >= ShiftTimings["Shift-B"].start &&
        currentHour < ShiftTimings["Shift-B"].end
      ) {
        setActiveShift("Shift-B");
      } else {
        setActiveShift("Shift-C");
      }
    };

    getCurrentShift();

    const interval = setInterval(() => {
      getCurrentShift();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppContext.Provider value={{ activeShift, sideBarOpen, setSideBarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
