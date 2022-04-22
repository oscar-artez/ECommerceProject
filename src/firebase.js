// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVJCp2B_LQLcGErTdFNJLTexvp8yvT3zI",
  authDomain: "react-auth-bfb00.firebaseapp.com",
  projectId: "react-auth-bfb00",
  storageBucket: "react-auth-bfb00.appspot.com",
  messagingSenderId: "718532230645",
  appId: "1:718532230645:web:7306823766d1fd5f4734bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
