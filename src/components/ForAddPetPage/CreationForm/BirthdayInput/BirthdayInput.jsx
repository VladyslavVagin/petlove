// @ts-nocheck
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IconCalendar from "./IconCalendar";


const BirthdayInput = () => {

  return (
    <>
      <DatePicker format="DD.MM.YYYY"
        onChange={(newValue) => console.log(newValue)}
        slotProps={{ textField: { size: 'small' } }}
        views={["day", "month", "year"]} slots={{
            openPickerIcon: IconCalendar,
          }}
      />
    </>
  );
};

export default BirthdayInput;
