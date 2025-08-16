// firestore.service.ts
import { Injectable } from "@nestjs/common";
import { AuthProvider } from "./auth.provider";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

@Injectable()
export class AuthService {
  constructor(private authProvider: AuthProvider) {}

  createUserCreds(email: string, password: string): Promise<string> {
    const auth = this.authProvider.getFbAuth();

    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCreds: UserCredential) => {
      return userCreds.user.getIdToken();
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error)
    });


  }

  authenticateUser(email: string, password: string): Promise<string> 
  {
      const auth = this.authProvider.getFbAuth();

      return signInWithEmailAndPassword(auth, email, password)
      .then((userCreds: UserCredential) => {
        return userCreds.user.getIdToken();
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error)
      });

  }

}
