import { useState } from "react";
import BarcodeScanner from "./BarcodeScanner/BarcodeScanner";
import { Box, Button } from "@mui/material";
import { Calories } from "./Nutrition/Calories";
import "./styles.css";
import { MacrosGraph } from "./Nutrition/MacrosGraph";

export default function Home() {
  const [scanBarcode, setScanBarcode] = useState(false);
  return (
    <div>
      <Box className="calorie-container">
        <Calories />
      </Box>
      <Box className="body-container">
        <Box className="graph-container">
          <MacrosGraph />
        </Box>
        <Box className="food-list-container">
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </Box>
      </Box>
      <Box className="scanner-button">
        <Button variant="outlined" onClick={() => setScanBarcode(true)}>
          Scan Barcode
        </Button>
        {scanBarcode && <BarcodeScanner scanBarcode={scanBarcode} setScanBarcode={setScanBarcode} />}
      </Box>
    </div>
  );
}
