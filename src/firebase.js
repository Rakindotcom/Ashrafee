// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1jR9Sd_YyZykGXd1dYYjTgYZ9kPIJv6k",
  authDomain: "hotel-ashrafee-404.firebaseapp.com",
  projectId: "hotel-ashrafee-404",
  storageBucket: "hotel-ashrafee-404.firebasestorage.app",
  messagingSenderId: "470906495035",
  appId: "1:470906495035:web:8f444beced1e991de77c1e",
  measurementId: "G-HFWYYKYB5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized services
export { app, analytics, auth, db, storage };
