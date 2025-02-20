import { Box, Typography } from "@mui/material";
import "./styles/foodsStyles.css";
import React from "react";
import { FoodEntry } from "../../ApolloClient/types";

export const FoodItem = (props: { food: FoodEntry }) => {
  return (
    <Box className="food-item">
      <Typography>{props.food.name}</Typography>
      <Typography>P: {props.food.macros.protein}</Typography>
      <Typography>F: {props.food.macros.fats}</Typography>
      <Typography>C: {props.food.macros.protein}</Typography>
    </Box>
  );
};
