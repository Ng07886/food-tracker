import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useReactiveVar } from "@apollo/client";
import { userMacrosVar } from "../../ApolloClient/ApolloState";

// Register the necessary elements
ChartJS.register(ArcElement, Tooltip, Legend);

export const MacrosGraph = () => {
  const macros = useReactiveVar(userMacrosVar);
  const [chartData, setChartData] = useState({
    labels: ["Protein", "Fats", "Carbs"],
    datasets: [
      {
        data: [macros?.protein || 0, macros?.fats || 0, macros?.carbs || 0],
        backgroundColor: ["#9BC0A6", "#A27B5C", "#2C3930"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: ["Protein", "Fats", "Carbs"],
      datasets: [
        {
          data: [macros?.protein ?? 0, macros?.fats ?? 0, macros?.carbs ?? 0],
          backgroundColor: ["#9BC0A6", "#A27B5C", "#2C3930"],
          borderWidth: 1,
        },
      ],
    });
  }, [macros]);

  return (
    <div className="chart-container">
      <h2>Macros Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </div>
  );
};
