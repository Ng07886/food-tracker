// src/apolloState.ts
import { makeVar, InMemoryCache } from "@apollo/client";

// Create a reactive variable to store the userId
export const userIdVar = makeVar<string | null>(null);
export const userEmailVar = makeVar<string | null>(null);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userId: {
          read() {
            return userIdVar();
          },
        },
        email: {
          read() {
            return userEmailVar();
          },
        },
      },
    },
  },
});
