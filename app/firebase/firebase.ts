// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
      
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYvoq5qR2Zh93CO4QO9XzSHZSEbbKk3XM",
  authDomain: "codemaster-07.firebaseapp.com",
  projectId: "codemaster-07",
  storageBucket: "codemaster-07.appspot.com",
  messagingSenderId: "991290217002",
  appId: "1:991290217002:web:b063d477c937b9e65d6953"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };