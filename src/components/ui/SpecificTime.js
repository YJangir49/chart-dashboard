import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const SpecificTimeModal = ({
  show,
  currentDate = new Date(),
  noOfDays = 10,
  onSave,
  onClose,
}) => {
  const ref = useRef(null);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [numberOfDays, setNumberOfDays] = useState(noOfDays);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bg-white w-[600px] z-40 top-6 left-14 rounded-lg"
    >
      <div className="bg-[#00c8ba] text-base text-white px-2 py-2 rounded-t-lg">
        Filter Options...
      </div>
      <div className="mx-6 mt-6 border border-1 relative bg-none p-4 text-base">
        <p className="absolute bg-white text-blue-700 left-4 top-[-5%] z-50 px-2">
          Date Range
        </p>
        <div className="flex flex-row justify-between items-center my-4">
          <p>Log Date-Time:</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              ampm={false}
              value={dayjs(selectedDate)}
              onChange={(date) => setSelectedDate(date)}
              renderInput={(props) => <TextField {...props} fullWidth />}
              className="w-[70%]"
              views={["year", "day", "hours", "minutes", "seconds"]}
            />
          </LocalizationProvider>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p>No of days in trend: </p>
          <TextField
            type="number"
            value={numberOfDays}
            onChange={(event) => setNumberOfDays(event.target.value)}
            className="w-[20%]"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button
          onClick={() =>
            onSave({
              selectedDate: new Date(selectedDate),
              noOfDays: numberOfDays,
            })
          }
          color="primary"
        >
          Ok
        </Button>
      </div>
    </div>
  );
};

export default SpecificTimeModal;
