// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aryan-blog-1b747.firebaseapp.com",
  projectId: "aryan-blog-1b747",
  storageBucket: "aryan-blog-1b747.appspot.com",
  messagingSenderId: "819211175200",
  appId: "1:819211175200:web:885f7a517e78fe97d74345"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);