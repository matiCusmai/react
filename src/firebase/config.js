// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDflr3pY1CRoEenRdTNLBPrQrAqpJYYcbs",
  authDomain: "entregafinal-d61ef.firebaseapp.com",
  projectId: "entregafinal-d61ef",
  storageBucket: "entregafinal-d61ef.appspot.com",
  messagingSenderId: "834117400899",
  appId: "1:834117400899:web:61fdf01038e80b5425d7f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)