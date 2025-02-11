import { gql } from "@apollo/client";

export const ITEM_QUERY = gql`
  query($gtinCode: String!) {
    searchFoods(gtinCode: $gtinCode) {
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
  }
`;
