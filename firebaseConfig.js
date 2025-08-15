// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9uChgePWenZyz_HSK7jXL4eQOT4pIO6E",
  authDomain: "surah-fatiha-ai.firebaseapp.com",
  projectId: "surah-fatiha-ai",
  storageBucket: "surah-fatiha-ai.firebasestorage.app",
  messagingSenderId: "818076339724",
  appId: "1:818076339724:web:cee3007e0dd12166e76829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// ✅ Export db so other files can use it
export { db };