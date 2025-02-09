import { useState } from "react";
import BarcodeScanner from "./BarcodeScanner/BarcodeScanner";
import { Box, Button } from "@mui/material";
import { Calories } from "./Nutrition/Calories";
import "./styles.css";
import { MacrosGraph } from "./Nutrition/MacrosGraph";
import { FoodList } from "./Nutrition/FoodList";
import { MyDatePicker } from "./Nutrition/MyDatePicker";

export default function Home() {
  const [scanBarcode, setScanBarcode] = useState(false);

  return (
    <Box className="home-container">
      <Box className="calorie-container">
        <Calories />
        <MyDatePicker />
      </Box>
      <Box className="body-container">
        <Box className="graph-container">
          <MacrosGraph />
        </Box>
        <Box className="food-list-container">
          <FoodList />
          <Box className="scanner-button">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#3f4f44",
                borderColor: "#dcd7c9",
                color: "#dcd7c9",
                "&:hover": { backgroundColor: "#8EA495" },
              }}
              onClick={() => setScanBarcode(true)}
            >
              Scan Barcode
            </Button>
            {scanBarcode && (
              <BarcodeScanner
                scanBarcode={scanBarcode}
                setScanBarcode={setScanBarcode}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
