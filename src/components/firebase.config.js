// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-q7amq74NMt2EuR_9Thfbfm3yr3TW3cQ",
  authDomain: "react-simple-auth-01.firebaseapp.com",
  projectId: "react-simple-auth-01",
  storageBucket: "react-simple-auth-01.appspot.com",
  messagingSenderId: "660480604050",
  appId: "1:660480604050:web:0dccecd7297f2df913734b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);