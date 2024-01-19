import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "the-petkery-store.firebaseapp.com",
  projectId: "the-petkery-store",
  storageBucket: "the-petkery-store.appspot.com",
  messagingSenderId: "613763635089",
  appId: "1:613763635089:web:038198521a9196ecc8ac30"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);