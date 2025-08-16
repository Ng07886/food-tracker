import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthProvider {
  
  private auth

  constructor() {

    const authConfig = {

      apiKey: process.env.AUTH_API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
      
    };

    const app = initializeApp(authConfig);

    this.auth = getAuth(app);
  }

  getFbAuth() {
    return this.auth;
  }
}
