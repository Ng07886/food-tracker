import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary elements
ChartJS.register(ArcElement, Tooltip, Legend);

export const MacrosGraph = () => {
  const [chartData, setChartData] = useState({
    labels: ["Protein", "Fats", "Carbs"],
    datasets: [
      {
        data: [180, 60, 450],
        backgroundColor: ["#9BC0A6", "#A27B5C", "#2C3930"],
        borderWidth: 1,
      },
    ],
  });

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
