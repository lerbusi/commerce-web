// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYzAy_YL-1pxYjhzlvc5KaQYY03l3KHKg",
  authDomain: "react-commerce-d78ab.firebaseapp.com",
  projectId: "react-commerce-d78ab",
  storageBucket: "react-commerce-d78ab.appspot.com",
  messagingSenderId: "953936821868",
  appId: "1:953936821868:web:265b0a90a12d1e566fe249",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();
