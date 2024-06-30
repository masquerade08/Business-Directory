// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0y9NGccfp54Yo6ftPzX9aWxWi0WT704Q",
  authDomain: "buisness-directory-1311b.firebaseapp.com",
  projectId: "buisness-directory-1311b",
  storageBucket: "buisness-directory-1311b.appspot.com",
  messagingSenderId: "344708018163",
  appId: "1:344708018163:web:50f0e8357d2898ffde2c86",
  measurementId: "G-92N36W7YL0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
