import { AppService } from "./app.service";
import { FirestoreService } from "../Firebase/firestore.service";
export declare class AppResolver {
    private readonly appService;
    private readonly firestoreService;
    constructor(appService: AppService, firestoreService: FirestoreService);
    searchFoods(userId: string): Promise<any>;
}
