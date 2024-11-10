// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOTRl4uoZDDlm8vBJqlNDf94scjC-m_Rg",
  authDomain: "foodtracker-5a7d4.firebaseapp.com",
  projectId: "foodtracker-5a7d4",
  storageBucket: "foodtracker-5a7d4.appspot.com",
  messagingSenderId: "815371791614",
  appId: "1:815371791614:web:4a7294ebf5fc94924fc9af",
  measurementId: "G-PYSEQVCXHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
