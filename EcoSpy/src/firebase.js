// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC72JrGPbsy8mvSlc1vd9ndD6Sn5moNeno",
  authDomain: "ecospy-1006.firebaseapp.com",
  projectId: "ecospy-1006",
  storageBucket: "ecospy-1006.firebasestorage.app",
  messagingSenderId: "435473261089",
  appId: "1:435473261089:web:d87a66e219ed210471f960",
  measurementId: "G-5XD5YV2F6K"
};

// Initialize Firebase
const Fireapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default Fireapp;