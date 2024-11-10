import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarcodeScanner() {
  const [data, setData] = useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result: any) => {
          console.log(result);
          if (result) setData(result.text);
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default BarcodeScanner;
