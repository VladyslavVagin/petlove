// @ts-nocheck
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IconCalendar from "./IconCalendar";

const BirthdayInput = ({ setBirthDate }) => {
  const handleDatePicker = (newValue) => {
    const year = newValue.$y;
    const month = String(+newValue.$M + 1).padStart(2, "0");
    const day = String(newValue.$D).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setBirthDate(formattedDate);
  };

  return (
    <>
      <DatePicker
        format="DD.MM.YYYY"
        onChange={handleDatePicker}
        slotProps={{
          textField: {
            size: "small",
            sx: {
              ".MuiInputBase-root.Mui-focused": {
                width: "210px",
                height: "52px",
                borderRadius: "30px",
                border: "1px solid var(--accent-color)",
              },
              ".MuiInputBase-root": {
                width: "210px",
                height: "52px",
                borderRadius: "30px",
                border: "1px solid var(--link-gray)",
                "&:hover": { border: "1px solid var(--accent-color)" },
              },
            },
          },
          popper: {
            sx: {
              ".MuiPaper-root": { border: "1px solid var(--accent-color)" },
            },
          },
        }}
        views={["day", "month", "year"]}
        slots={{
          openPickerIcon: IconCalendar,
        }}
      />
    </>
  );
};

export default BirthdayInput;
