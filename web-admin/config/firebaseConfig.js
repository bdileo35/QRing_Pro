// config/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Configuración de tu app Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4dTR4JlKXWcyjWrSSI9YUyKl7xlNwWjU",
  authDomain: "qring-pro-35110.firebaseapp.com",
  projectId: "qring-pro-35110",
  storageBucket: "qring-pro-35110.firebasestorage.app",
  messagingSenderId: "1047861595800",
  appId: "1:1047861595800:web:5258d067700e2df6130aed",
  measurementId: "G-B4CL1RXR35",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Base de datos Firestore
export const db = getFirestore(app);

// Inicializa Analytics solo si está soportado (por seguridad en SSR)
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    } else {
      console.warn("Firebase Analytics no está soportado en este entorno.");
    }
  });
}
