// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh87mpd60bb-P2b0ro-1oShm6n8Q83UN0",
  authDomain: "plant-assignment.firebaseapp.com",
  projectId: "plant-assignment",
  storageBucket: "plant-assignment.appspot.com",
  messagingSenderId: "729879518717",
  appId: "1:729879518717:web:a49b3a0866a40e7b470d94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;