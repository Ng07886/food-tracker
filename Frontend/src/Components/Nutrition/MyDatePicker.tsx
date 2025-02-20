import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { selectedDateVar } from "../../ApolloClient/ApolloState";

export const MyDatePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: 300, margin: "20px auto" }}>
        <DatePicker
          label="Select Date"
          value={dayjs(selectedDateVar(), "YYYYMMDD")}
          onChange={(newDate) => {
            if (newDate) {
              selectedDateVar(newDate.format("YYYYMMDD"));
            }
          }}
          slots={{ textField: TextField }}
        />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Selected Date: {selectedDateVar()}
        </Typography>
      </Box>
    </LocalizationProvider>
  );
};
