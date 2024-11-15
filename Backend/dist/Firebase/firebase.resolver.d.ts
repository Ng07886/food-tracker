import { FirestoreService } from "./firestore.service";
import { FoodEntries } from "./Types/firebase.types";
import { GetFoodEntriesByDateDTO } from "./Types/firebase.dto";
export declare class FirestoreResolver {
    private readonly firestoreService;
    constructor(firestoreService: FirestoreService);
    getFoodEntriesByDate(input: GetFoodEntriesByDateDTO): Promise<FoodEntries>;
}
