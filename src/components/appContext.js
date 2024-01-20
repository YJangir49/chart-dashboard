import React, { createContext, useContext, useEffect, useState } from "react";
import { ShiftTimings } from "../constants/shifts";

const AppContext = createContext();

const getActiveShiftIndex = (shift) => {
  switch (shift) {
    case "Shift-A":
      return 0;
    case "Shift-B":
      return 1;
    default:
      return 2;
  }
};

export const AppProvider = ({ children }) => {
  const [systemDate, setSystemDate] = useState(new Date());
  const [activeShift, setActiveShift] = useState("Shift-A"); //Default Shift A
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const activeShiftIndex = getActiveShiftIndex(activeShift);

  useEffect(() => {
    const getCurrentShift = () => {
      const currentHour = systemDate.getHours();
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
    <AppContext.Provider
      value={{
        activeShift,
        sideBarOpen,
        setSideBarOpen,
        activeShiftIndex,
        setSystemDate,
        systemDate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
