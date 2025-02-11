import React from "react";
import { Box, Typography } from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import "./styles/styles.css";
import { userIdVar } from "../../ApolloClient/ApolloState";

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
          Welcome: {useReactiveVar(userIdVar)} Calories: 300
        </Typography>
      </Box>
    </Box>
  );
};
