import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const SpecificTimeModal = ({
  currentDate = new Date(),
  activeShift,
  noOfDays = 10,
  onSave,
}) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedShift, setSelectedShift] = useState(activeShift);
  const [numberOfDays, setNumberOfDays] = useState(noOfDays);

  return (
    <div className="absolute bg-white w-[600px] z-40 top-6 left-14">
      <div className="bg-cyan-300 text-white px-2 py-1">Filter Options...</div>
      <div className="mx-6 mt-6 border border-1 relative bg-none p-4">
        <p className="absolute bg-white text-blue-700 left-4 top-[-5%] z-50 px-2">
          Date Range
        </p>
        <div className="flex flex-row justify-between items-center">
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

        <div className="flex flex-row justify-between items-center">
          <p>At Shift:</p>
          <RadioGroup
            value={selectedShift}
            onChange={(event) => setSelectedShift(event.target.value)}
            row
            className="w-[70%]"
          >
            <FormControlLabel
              value="Shift A"
              control={<Radio />}
              label="Shift A"
            />
            <FormControlLabel
              value="Shift B"
              control={<Radio />}
              label="Shift B"
            />
            <FormControlLabel
              value="Shift C"
              control={<Radio />}
              label="Shift C"
            />
          </RadioGroup>
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
              activeShift,
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
