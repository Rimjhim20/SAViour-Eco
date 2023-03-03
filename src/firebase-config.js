import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCyGjH1OXfAR9howE1-zkM8j2OF6PO0fLY",
  authDomain: "my-first-project-b2711.firebaseapp.com",
  projectId: "my-first-project-b2711",
  storageBucket: "my-first-project-b2711.appspot.com",
  messagingSenderId: "564950285354",
  appId: "1:564950285354:web:360c978ba11151bb541753",
  measurementId: "G-KTZYH05BGK"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);