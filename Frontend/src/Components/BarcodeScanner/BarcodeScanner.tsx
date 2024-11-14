import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useQuery, gql } from "@apollo/client";

const ITEM_QUERY = gql`
query($query: String!)
{
  searchFoods(query: $query)
  {
      id
    description
    nutritionData {
      protein {
        amount
        unitName
      }
      carbs {
        amount
        unitName
      }
      fats {
        amount
        unitName
      }
      calories {
        amount
        unitName
      }
    }
  }
}`;

interface ParentProps {
  setScanBarcode: React.Dispatch<React.SetStateAction<boolean>>;
  scanBarcode: boolean
}


function BarcodeScanner({scanBarcode, setScanBarcode}: ParentProps) {
  const [query, setQuery] = useState<string | null>(null);
  const { data, loading, error } = useQuery(ITEM_QUERY, {
    variables: { query },
    skip: !query, // Skip the query if the barcode is null
  });

  const handleScan = (scannedBarcode: string) => {
    console.log(scannedBarcode);
    setQuery(scannedBarcode);
  };

  console.log(data);

  return (
    <>
       {scanBarcode && <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result: any) => {
          if (result) handleScan(result.text);
        }}
      />}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.searchFoods && (
        <div>
          <p>{data.searchFoods.description}</p>
          <p>Calories: {data.searchFoods.nutritionData.calories.amount} {data.searchFoods.nutritionData.calories.unitName}</p>
          <p>Protein: {data.searchFoods.nutritionData.protein.amount} {data.searchFoods.nutritionData.protein.unitName}</p>
          <p>Carbs: {data.searchFoods.nutritionData.carbs.amount} {data.searchFoods.nutritionData.carbs.unitName}</p>
          <p>Fats: {data.searchFoods.nutritionData.fats.amount} {data.searchFoods.nutritionData.fats.unitName}</p>
        </div>
        )}
    </>
  );
}

export default BarcodeScanner;
