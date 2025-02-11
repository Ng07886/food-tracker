import { gql } from "@apollo/client";

export const INITIALIZE_USER = gql`
  mutation($userId: String!) {
    initializeUser(userId: $userId)
  }
`;
