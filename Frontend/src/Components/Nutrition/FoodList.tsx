import { Box, Typography } from "@mui/material";
import React from "react";
import { FoodItem } from "./FoodItem";
import "./styles/foodsStyles.css";

export const FoodList = () => {
  return (
    <Box>
      <Box className="foods-title">
        <Typography>Foods</Typography>
      </Box>
      <Box className="food-item-box">
        <FoodItem />
      </Box>
    </Box>
  );
};
