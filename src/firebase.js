// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_faX8jhqNjvNbNuXJ3mrz05-YlU7bVpg",
    authDomain: "react-chat-eda38.firebaseapp.com",
    projectId: "react-chat-eda38",
    storageBucket: "react-chat-eda38.appspot.com",
    messagingSenderId: "192497346514",
    appId: "1:192497346514:web:78ddc5add51749e5344a0b",
    measurementId: "G-6RKCN2T76H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);