// firestore.service.ts
import { Injectable } from "@nestjs/common";
import { FirebaseProvider } from "./firebase.provider";
import { FoodEntriesDTO } from "./Types/firebase.dto";

@Injectable()
export class FirestoreService {
  constructor(private firebaseProvider: FirebaseProvider) {}

  async addFoodEntry(userId: string, data: any) {
    const firestore = this.firebaseProvider.getFirestore();
    const dateDocRef = firestore
      .collection("Users")
      .doc(userId)
      .collection("DateId");

    await dateDocRef.add(data);
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
