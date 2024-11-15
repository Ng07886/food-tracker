// firestore.service.ts
import { Injectable } from "@nestjs/common";
import { FirebaseProvider } from "./firebase.provider";
import { FoodEntriesDTO } from "./Types/firebase.dto";

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
      macros: { carbs: 0, protein: 0, fat: 0 },
      foods: [],
    });
    return "User initalized";
  }

  async addFoodEntry(
    userId: string,
    date: string,
    foodName: string,
    macros: Macros,
    calories: number
  ): Promise<string> {
    const firestore = this.firebaseProvider.getFirestore();

    const userDocRef = firestore.collection("Users").doc(userId);
    const dateDocRef = userDocRef.collection("DateId").doc(date);

    const dateDoc = await dateDocRef.get();
    if (!dateDoc.exists) {
      await dateDocRef.set({
        calories: calories,
        macros: {
          carbs: macros.carbs,
          protein: macros.protein,
          fat: macros.fats,
        },
        foods: [{ name: foodName, calories: calories, macros: macros }],
      });
    } else {
      const existingData = dateDoc.data();

      const updatedCalories = existingData.calories + calories;
      const updatedMacros = {
        carbs: existingData.macros.carbs + macros.carbs,
        protein: existingData.macros.protein + macros.protein,
        fat: existingData.macros.fat + macros.fats,
      };

      const updatedFoods = [
        ...existingData.foods,
        { name: foodName, calories: calories, macros: macros },
      ];

      await dateDocRef.update({
        calories: updatedCalories,
        macros: updatedMacros,
        foods: updatedFoods,
      });
    }

    return "Food entry added successfully.";
  }

  async getFoodEntriesByDate(
    userId: string,
    date: string
  ): Promise<FoodEntriesDTO> {
    const firestore = this.firebaseProvider.getFirestore();
    const dateDocRef = firestore
      .collection("Users")
      .doc(userId)
      .collection("DateId")
      .doc(date);

    const dateDoc = await dateDocRef.get();

    if (dateDoc.exists) {
      return dateDoc.data() as FoodEntriesDTO; // Returns the food entry data for the specified date
    } else {
      throw new Error("User not found");
    }
  }
}
