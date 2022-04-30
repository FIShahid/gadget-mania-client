// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOwH7_KsvXjZrPd6yQ-xNbUVXPELq1GNY",
  authDomain: "warehouse-management-c429a.firebaseapp.com",
  projectId: "warehouse-management-c429a",
  storageBucket: "warehouse-management-c429a.appspot.com",
  messagingSenderId: "472013502897",
  appId: "1:472013502897:web:1d657c6f21504c62f4a590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth