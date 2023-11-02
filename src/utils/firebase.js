// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtFkXzquMnOMv8TcrIR0OuYn3eQ4Zc3C8",
  authDomain: "netflixgpt-5bcbb.firebaseapp.com",
  projectId: "netflixgpt-5bcbb",
  storageBucket: "netflixgpt-5bcbb.appspot.com",
  messagingSenderId: "425912094602",
  appId: "1:425912094602:web:ebe8d635a885348cc64273",
  measurementId: "G-E90P8KFNBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();