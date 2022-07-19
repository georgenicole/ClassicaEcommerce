// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eIU5SgX9evXO3Hf7w5Fv2Xz-e3x0fC4",
  authDomain: "classica-a447e.firebaseapp.com",
  projectId: "classica-a447e",
  storageBucket: "classica-a447e.appspot.com",
  messagingSenderId: "1005296339322",
  appId: "1:1005296339322:web:d3bef80bc47b3c19db2ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)