import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField, Box, Typography } from "@mui/material";

export const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ width: 300, margin: "20px auto" }}>
        <DatePicker
          label="Select a date"
          value={selectedDate}
          onChange={(newValue: Date | null) => {
            if (newValue) setSelectedDate(newValue); // Ensure null safety
          }}
          slots={{ textField: TextField }}
        />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Selected Date: {selectedDate.toLocaleDateString()}
        </Typography>
      </Box>
    </LocalizationProvider>
  );
};
