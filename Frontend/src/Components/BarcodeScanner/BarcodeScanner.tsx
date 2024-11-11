import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useQuery, gql } from "@apollo/client";

function BarcodeScanner() {
  const [readdata, setReadData] = useState("Not Found");
  
  const ITEM_QUERY = gql
`{
    searchFoods(query: ${readdata})
    {
        id
    }
  }`;

  const { data, loading, error } = useQuery(ITEM_QUERY);

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result: any) => {
          console.log(result);
          if (result) setReadData(result.text);
        }}
      />
      <p>{(loading) && "Loading..." || (error) && error.message}</p>
      <ul>
        <li>
          {data.searchFoods[0].id}
        </li>
      </ul>       
    </>
  );
}

export default BarcodeScanner;
