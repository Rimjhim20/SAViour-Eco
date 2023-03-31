import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import 'firebase/messaging';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDhD_RiDejHYsDyXeGZ6Vtiu-KSlq6GFpQ",
  authDomain: "solution-f5982.firebaseapp.com",
  databaseURL: "https://solution-f5982-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "solution-f5982",
  storageBucket: "solution-f5982.appspot.com",
  messagingSenderId: "123087560437",
  appId: "1:123087560437:web:7af189c5e721dd67516fbc",
  measurementId: "G-W0RNFHZVKD"
};


const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const database = getDatabase(app);

