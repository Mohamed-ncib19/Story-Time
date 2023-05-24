// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArPBqwOyVEGadx7z4ntnLObJ7J4Za_OBw",
  authDomain: "story-time-a4365.firebaseapp.com",
  projectId: "story-time-a4365",
  storageBucket: "story-time-a4365.appspot.com",
  messagingSenderId: "814236224269",
  appId: "1:814236224269:web:e5532fccff9ee0dfd03e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);