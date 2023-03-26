import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDvZbQ_PqlSFsnpLvpxYzO79FgJvbPOyT8",
  authDomain: "solution23-6e118.firebaseapp.com",
  projectId: "solution23-6e118",
  storageBucket: "solution23-6e118.appspot.com",
  messagingSenderId: "532718820364",
  appId: "1:532718820364:web:c6c9efd3ae67dff5ae2229",
  measurementId: "G-N7D951Q69B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
