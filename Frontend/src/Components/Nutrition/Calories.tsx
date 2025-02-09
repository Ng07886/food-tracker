import React from "react";
import { Box, Typography } from "@mui/material";
import "./styles/styles.css";

export const Calories = () => {
  return (
    <Box className="title-box">
      <Box className="quote">
        <Typography variant="h6">
          "The pain you feel today will be the strength you feel tomorrow."{" "}
        </Typography>
      </Box>
      <Box className="calorie-box">
        <Typography variant="h5">Calories: 300</Typography>
      </Box>
    </Box>
  );
};
