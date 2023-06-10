import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdcAp2D2HJlqbkZ9mASWvR0bYnZBg6FsY",
  authDomain: "info-hive.firebaseapp.com",
  projectId: "info-hive",
  storageBucket: "info-hive.appspot.com",
  messagingSenderId: "329424847212",
  appId: "1:329424847212:web:c35f11ba5729dad8e7b349",
  measurementId: "G-FP9FC2N88R",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
