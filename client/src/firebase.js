// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-57239.firebaseapp.com",
  projectId: "mern-estate-57239",
  storageBucket: "mern-estate-57239.appspot.com",
  messagingSenderId: "178935134872",
  appId: "1:178935134872:web:c22b19909933ead6186eed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);