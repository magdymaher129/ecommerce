
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBbj9N9ginLFIwkkK0oO9PsJ0DBGtgyFFc",
  authDomain: "next-ecommerce-cdaa0.firebaseapp.com",
  projectId: "next-ecommerce-cdaa0",
  storageBucket: "next-ecommerce-cdaa0.appspot.com",
  messagingSenderId: "592056093576",
  appId: "1:592056093576:web:53ebc7ca9ef11d44f3483d"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)