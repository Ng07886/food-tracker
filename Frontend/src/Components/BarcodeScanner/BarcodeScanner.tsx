import { useCallback, useEffect, useMemo, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useQuery } from "@apollo/client";
import { ITEM_QUERY } from "../../ApolloClient/queries";

interface ParentProps {
  setScanBarcode: React.Dispatch<React.SetStateAction<boolean>>;
  scanBarcode: boolean;
}

function BarcodeScanner({ scanBarcode, setScanBarcode }: ParentProps) {
  const [gtinCode, setCode] = useState<string | null>(null);
  const { data, loading, error } = useQuery(ITEM_QUERY, {
    variables: { gtinCode },
    skip: !gtinCode, // Skip the query if the barcode is null
  });

  const handleScan = (scannedBarcode: string) => {
    setCode(scannedBarcode);
    setScanBarcode(false)
  };

  useCallback(handleScan, [scanBarcode])

  return (
    <>
      <div>
        {scanBarcode && (
          <BarcodeScannerComponent
            width={300}
            height={300}
            onUpdate={(err, result: any) => {
              if (result) handleScan(result.text);
            }}
          />
        )}
      </div>
      {
        !scanBarcode && (
          <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.searchFoods && (
              <div>
                <p>{data.searchFoods.description}<br/>
                  {`${data.searchFoods.nutritionData.calories.amount} Calories`}<br/>
                  {`Protein: ${data.searchFoods.nutritionData.protein.amount}${(data.searchFoods.nutritionData.protein.unitName).toLowerCase()}`}<br/>
                  {`Carbs: ${data.searchFoods.nutritionData.carbs.amount}${(data.searchFoods.nutritionData.carbs.unitName).toLowerCase()}`}<br/>
                  {`Fats: ${data.searchFoods.nutritionData.fats.amount}${(data.searchFoods.nutritionData.fats.unitName).toLowerCase()}`}<br/>
                </p>
              </div>
            )}
          </div>
        )
      }

    </>
  );
}

export default BarcodeScanner;
