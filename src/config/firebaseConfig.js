// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw-0FfFe0_lIQGpJ66YxTn81Ck6Tqfleo",
  authDomain: "vjnotes-app.firebaseapp.com",
  projectId: "vjnotes-app",
  storageBucket: "vjnotes-app.appspot.com",
  messagingSenderId: "349425681757",
  appId: "1:349425681757:web:e027f2872684dfaf6fd4b4",
  measurementId: "G-ZEW685082B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
