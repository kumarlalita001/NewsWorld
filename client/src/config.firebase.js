// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl_ih69wk9HoD4yMBAYSmBfIBi-aLnYi8",
  authDomain: "newsworld001.firebaseapp.com",
  projectId: "newsworld001",
  storageBucket: "newsworld001.appspot.com",
  messagingSenderId: "149432501462",
  appId: "1:149432501462:web:697d19c54715a0d8b87577",
  measurementId: "G-GD135P1WPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
