import { useReactiveVar } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { userFoodEntriesVar } from "../../ApolloClient/ApolloState";
import { FoodEntry } from "../../ApolloClient/types";
import { FoodItem } from "./FoodItem";
import "./styles/foodsStyles.css";

export const FoodList = () => {
  const foods: FoodEntry[] | null = useReactiveVar(userFoodEntriesVar);

  return (
    <Box>
      <Box className="foods-title">
        <Typography>Foods</Typography>
      </Box>
      <Box className="food-item-box">
        {foods &&
          foods.map((food, i) => {
            return <FoodItem key={i} food={food} />;
          })}
      </Box>
    </Box>
  );
};
