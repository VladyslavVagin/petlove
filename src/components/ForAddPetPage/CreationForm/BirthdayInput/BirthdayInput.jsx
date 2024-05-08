import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles'
import IconCalendar from "./IconCalendar";

const StyledTextField = styled(TextField)({
    color: '#bbdefb',
    borderRadius: '20px',
    border: '1px solid var(--link-gray)',
    backgroundColor: "transparent",
    outline: "none",
    height: "42px"
  })

const BirthdayInput = () => {
  return (
    <>
      <DatePicker 
        onChange={(newValue) => console.log(newValue)}
        slotProps={{ textField: { size: 'small' } }}
        views={["day", "month", "year"]} slots={{
            textField: StyledTextField,
            openPickerIcon: IconCalendar,
          }}
      />
    </>
  );
};

export default BirthdayInput;
