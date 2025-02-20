import * as admin from "firebase-admin";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FirebaseProvider {
  private firestore: FirebaseFirestore.Firestore;

  constructor() {
    // Initialize Firebase Admin SDK
    admin.initializeApp({
        credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY
      }),
    });
    this.firestore = admin.firestore();
  }

  getFirestore() {
    return this.firestore;
  }
}
