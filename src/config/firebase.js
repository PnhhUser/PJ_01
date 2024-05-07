// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0EI5PpfBuo7m6e2J6n1qtDOzjewk4Xxo",
  authDomain: "pj-0-1.firebaseapp.com",
  projectId: "pj-0-1",
  storageBucket: "pj-0-1.appspot.com",
  messagingSenderId: "740887105572",
  appId: "1:740887105572:web:aa87bc0d7b2286688c88b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
