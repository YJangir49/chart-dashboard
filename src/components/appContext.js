import React, { createContext, useContext, useEffect, useState } from "react";
import { ShiftTimings } from "../constants/shifts";
import { UTILITY_DATA_TIME } from "../constants/config";

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
  const [live, setLive] = useState(true);
  const [systemDate, setSystemDate] = useState(new Date());
  const [activeShift, setActiveShift] = useState("Shift-A"); //Default Shift A
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [backendDate, setBackendDate] = useState(null);

  const activeShiftIndex = getActiveShiftIndex(activeShift);

  useEffect(() => {
    // This code block will set new Date in every one minutes for live data
    let intervalId;
    if (live) {
      //setSystemDate(new Date()); //As soon as system enters in live state update the live date and set an interval of 60 sec
      intervalId = setInterval(
        () => setSystemDate(new Date()),
        UTILITY_DATA_TIME
      );
    }
    return () => clearInterval(intervalId);
  }, [live]);

  useEffect(() => {
    const currentHour =
      !live && backendDate ? backendDate.getHours() : systemDate.getHours();
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
  }, [systemDate, live, backendDate]);

  return (
    <AppContext.Provider
      value={{
        activeShift,
        sideBarOpen,
        setSideBarOpen,
        activeShiftIndex,
        setSystemDate,
        systemDate,
        live,
        setLive,
        backendDate,
        setBackendDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
