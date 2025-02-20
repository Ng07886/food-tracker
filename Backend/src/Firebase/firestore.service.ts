// firestore.service.ts
import { Injectable } from "@nestjs/common";
import { FirebaseProvider } from "./firebase.provider";
import { FoodEntriesDTO, FoodEntryDto } from "./Types/firebase.dto";

type Macros = {
  carbs: number;
  protein: number;
  fats: number;
};

@Injectable()
export class FirestoreService {
  constructor(private firebaseProvider: FirebaseProvider) {}

  async initializeUser(userId: string): Promise<string> {
    const firestore = this.firebaseProvider.getFirestore();

    const userDocRef = firestore.collection("Users").doc(userId);

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}${String(currentDate.getDate()).padStart(2, "0")}`;

    const dateDocRef = userDocRef.collection("DateId").doc(formattedDate);

    await dateDocRef.set({
      calories: 0,
      macros: { carbs: 0, protein: 0, fats: 0 },
      foods: [],
    });
    console.log("User initialized");
    return "User initialized";
  }

  async addFoodEntry(input: FoodEntryDto): Promise<string> {
    const firestore = this.firebaseProvider.getFirestore();

    const userDocRef = firestore.collection("Users").doc(input.userId);
    const dateDocRef = userDocRef.collection("DateId").doc(input.date);

    const dateDoc = await dateDocRef.get();
    if (!dateDoc.exists) {
      await dateDocRef.set({
        calories: input.calories,
        macros: {
          carbs: input.macros.carbs,
          protein: input.macros.protein,
          fats: input.macros.fats,
        },
        foods: [
          {
            name: input.foodName,
            calories: input.calories,
            macros: input.macros,
          },
        ],
      });
    } else {
      const existingData = dateDoc.data();

      const updatedCalories = existingData.calories + input.calories;
      const updatedMacros = {
        carbs: existingData.macros.carbs + input.macros.carbs,
        protein: existingData.macros.protein + input.macros.protein,
        fats: existingData.macros.fats + input.macros.fats,
      };

      const updatedFoods = [
        ...existingData.foods,
        {
          name: input.foodName,
          calories: input.calories,
          macros: input.macros,
        },
      ];

      await dateDocRef.update({
        calories: updatedCalories,
        macros: updatedMacros,
        foods: updatedFoods,
      });
    }

    return `${input.foodName} added successfully.`;
  }

  async getFoodEntriesByDate(
    userId: string,
    date: string
  ): Promise<FoodEntriesDTO> {
    const firestore = this.firebaseProvider.getFirestore();
    const userDocRef = firestore.collection("Users").doc(userId);
    const dateDocRef = userDocRef.collection("DateId").doc(date);

    const dateDoc = await dateDocRef.get();

    if (dateDoc.exists) {
      return dateDoc.data() as FoodEntriesDTO; // Returns the food entry data for the specified date
    } else {
      const dateDocRef = userDocRef.collection("DateId").doc(date);

      await dateDocRef.set({
        calories: 0,
        macros: { carbs: 0, protein: 0, fats: 0 },
        foods: [],
      });
      const initialData = await dateDocRef.get();
      console.log(
        "Date not found date initialized",
        initialData.data() as FoodEntriesDTO
      );

      return initialData.data() as FoodEntriesDTO;
    }
  }
}
