// @ts-nocheck
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IconCalendar from "./IconCalendar";


const BirthdayInput = () => {

  return (
    <>
      <DatePicker format="DD.MM.YYYY"
        onChange={(newValue) => console.log(newValue)}
        slotProps={{ textField: { size: 'small', sx: {
          ".MuiOutlineInput-root": {border: "none", "& .Mui-focused": {border: "none"}},
          ".MuiInputBase-root": {border: "none", "& .Mui-focused": {border: "none"}},
          ".MuiInputBase-input": {border: "none", outline: "none", "&:hover": {border: "none", outline: "none"}},
        } },  popper: {
          sx: {
            ".MuiPaper-root": { border: "1px solid var(--accent-color)"},
          },
        }, }}
        views={["day", "month", "year"]} slots={{
            openPickerIcon: IconCalendar,
          }}
      />
    </>
  );
};

export default BirthdayInput;
