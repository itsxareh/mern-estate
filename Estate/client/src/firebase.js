// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cfec8.firebaseapp.com",
  projectId: "mern-estate-cfec8",
  storageBucket: "mern-estate-cfec8.appspot.com",
  messagingSenderId: "971493241071",
  appId: "1:971493241071:web:5f80aa03e7557811752b1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);