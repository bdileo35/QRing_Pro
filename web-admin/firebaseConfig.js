// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4dTR4JlKXWcyjWrSSI9YUyKl7xlNwWjU",
  authDomain: "qring-pro-35110.firebaseapp.com",
  projectId: "qring-pro-35110",
  storageBucket: "qring-pro-35110.firebasestorage.app",
  messagingSenderId: "1047861595800",
  appId: "1:1047861595800:web:5258d067700e2df6130aed",
  measurementId: "G-B4CL1RXR35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);