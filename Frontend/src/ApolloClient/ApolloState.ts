// src/apolloState.ts
import { makeVar, InMemoryCache } from "@apollo/client";
import dayjs from "dayjs";
import { FoodEntry, Macros } from "./types";

// Create a reactive variable to store the userId
export const userIdVar = makeVar<string | null>(null);
export const userEmailVar = makeVar<string | null>(null);
export const userCaloriesVar = makeVar<number | null>(null);
export const userMacrosVar = makeVar<Macros | null>(null);
export const userFoodEntriesVar = makeVar<FoodEntry[] | null>(null);
export const selectedDateVar = makeVar<string>(dayjs().format("YYYYMMDD"));

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
        calories: {
          read() {
            return userCaloriesVar();
          },
        },
        foodEntries: {
          read() {
            return userFoodEntriesVar();
          },
        },
        macros: {
          read() {
            return userMacrosVar();
          },
        },
        selectedDateVar: {
          read() {
            return selectedDateVar();
          },
        },
      },
    },
  },
});
