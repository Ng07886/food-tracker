import * as admin from "firebase-admin";
export declare class FirebaseProvider {
    private firestore;
    constructor();
    getFirestore(): admin.firestore.Firestore;
}
