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
      labelNutrients
    {
      nutrientId
      name
      amount
      unitName 
    }
  }
}`;


function BarcodeScanner() {
  const [query, setQuery] = useState<string | null>(null);
  const [bool, setBool] = useState(true)
  const { data, loading, error } = useQuery(ITEM_QUERY, {
    variables: { query },
    skip: !query, // Skip the query if the barcode is null
  });

  const handleScan = (scannedBarcode: string) => {
    console.log(scannedBarcode);
    setBool(false)
    setQuery(scannedBarcode);
  };

  console.log(data);

  return (
    <>
      {bool && <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result: any) => {
          if (bool && result) handleScan(result.text);
        }}
      />}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.searchFoods && (
        <div>
          <p>{data.searchFoods.description}</p>
          {data.searchFoods.labelNutrients.map((nutrient:any)=>
          (
            <div>
              <p>{nutrient.name}</p>
              <p>{nutrient.amount} {nutrient.unitName}</p>
            </div>
          ))}
        </div>
        )}
    </>
  );
}

export default BarcodeScanner;
