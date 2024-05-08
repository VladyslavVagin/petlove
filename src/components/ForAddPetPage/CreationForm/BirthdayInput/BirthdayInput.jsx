import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)({
    color: '#bbdefb',
    borderRadius: '20px',
    borderWidth: '0px',
    borderColor: '#2196f3',
    border: '0px solid',
    backgroundColor: '#0d47a1',
  })

const BirthdayInput = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={(newValue) => console.log(newValue)}
        views={["year", "month", "day"]} slots={{
            textField: StyledTextField,
          }} 
      />
    </LocalizationProvider>
  );
};

export default BirthdayInput;
