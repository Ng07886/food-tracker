import { gql } from "@apollo/client";

export const ITEM_QUERY = gql`
  query ($gtinCode: String!) {
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

export const GET_FOOD_ENTRIES_BY_DATE = gql`
  query GetFoodEntriesByDate($userId: String!, $date: String!) {
    getFoodEntriesByDate(input: { userId: $userId, date: $date }) {
      calories
      macros {
        carbs
        protein
        fats
      }
      foods {
        name
        calories
        macros {
          carbs
          protein
          fats
        }
      }
    }
  }
`;
