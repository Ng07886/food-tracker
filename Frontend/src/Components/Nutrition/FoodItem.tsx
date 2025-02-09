import { Box, Typography } from "@mui/material";
import "./styles/foodsStyles.css";
import React from "react";

export const FoodItem = () => {
  return (
    <Box className="food-item">
      <Typography>Pizza</Typography>
      <Typography>P: 20g</Typography>
      <Typography>F: 100g</Typography>
      <Typography>C: 60g</Typography>
    </Box>
  );
};
