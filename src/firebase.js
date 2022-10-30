// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkI2K8OcHKPo_QtqOTxe5Elv5JjwfhPqg",
  authDomain: "restaurante-react-c3c04.firebaseapp.com",
  projectId: "restaurante-react-c3c04",
  storageBucket: "restaurante-react-c3c04.appspot.com",
  messagingSenderId: "932254539662",
  appId: "1:932254539662:web:5df80e45bcd5d7ea6c0edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);