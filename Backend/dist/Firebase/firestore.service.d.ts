import { FirebaseProvider } from "./firebase.provider";
import { FoodEntriesDTO } from "./Types/firebase.dto";
export declare class FirestoreService {
    private firebaseProvider;
    constructor(firebaseProvider: FirebaseProvider);
    addFoodEntry(userId: string, data: any): Promise<void>;
    getFoodEntriesByDate(userId: string, date: string): Promise<FoodEntriesDTO>;
}
