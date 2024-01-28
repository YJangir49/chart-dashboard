import React, { createContext, useContext, useEffect, useState } from "react";
import { ShiftTimings } from "../constants/shifts";
import {
  HISTORIC_DATA_RENEW_TIME,
  UTILITY_DATA_TIME,
} from "../constants/config";

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
  const [historicDate, setHistoricDate] = useState(new Date());
  const [activeShift, setActiveShift] = useState("Shift-A"); //Default Shift A
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [backendDate, setBackendDate] = useState(null);

  const activeShiftIndex = getActiveShiftIndex(activeShift);

  useEffect(() => {
    // This code block will set new Date in every one minutes for live data
    let intervalId;
    if (live) {
      intervalId = setInterval(
        () => setSystemDate(new Date()),
        UTILITY_DATA_TIME
      );
    }
    return () => clearInterval(intervalId);
  }, [live]);

  useEffect(() => {
    // This code block will set new Date for historic graphs in defined time
    let intervalId;
    if (
      live &&
      HISTORIC_DATA_RENEW_TIME &&
      Number(HISTORIC_DATA_RENEW_TIME) > 0
    ) {
      intervalId = setInterval(
        () => setHistoricDate(new Date()),
        HISTORIC_DATA_RENEW_TIME
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
        historicDate,
        setHistoricDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
