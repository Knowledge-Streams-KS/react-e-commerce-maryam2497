// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCart9UhUbZDMKfauHhoD9mcr_AqxNnTns",
  authDomain: "login-auth00.firebaseapp.com",
  projectId: "login-auth00",
  storageBucket: "login-auth00.appspot.com",
  messagingSenderId: "142769725628",
  appId: "1:142769725628:web:73573ed89911ea1b0070b9",
  measurementId: "G-QDQJW50GR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;