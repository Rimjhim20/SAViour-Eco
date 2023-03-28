import { getFirestore } from "firebase/firestore";
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
// apiKey: "AIzaSyDvZbQ_PqlSFsnpLvpxYzO79FgJvbPOyT8",
// authDomain: "solution23-6e118.firebaseapp.com",
// projectId: "solution23-6e118",
// storageBucket: "solution23-6e118.appspot.com",
// messagingSenderId: "532718820364",
// appId: "1:532718820364:web:c6c9efd3ae67dff5ae2229",
// measurementId: "G-N7D951Q69B"

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const database = getDatabase(app);

