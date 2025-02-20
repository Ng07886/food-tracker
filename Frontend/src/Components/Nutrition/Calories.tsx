import React from "react";
import { Box, Typography } from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import "./styles/styles.css";
import { userCaloriesVar } from "../../ApolloClient/ApolloState";

export const Calories = () => {
  return (
    <Box className="title-box">
      <Box className="quote">
        <Typography variant="h6">
          "The pain you feel today will be the strength you feel tomorrow."{" "}
        </Typography>
      </Box>
      <Box className="calorie-box">
        <Typography variant="h5">
          Calories: {useReactiveVar(userCaloriesVar) || 0}
        </Typography>
      </Box>
    </Box>
  );
};
