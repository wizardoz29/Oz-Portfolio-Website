// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqGbhCEkUDKuBl_aBsKcDqxbcLKcR8J0I",
  authDomain: "portfolio-cv-f9c8f.firebaseapp.com",
  projectId: "portfolio-cv-f9c8f",
  storageBucket: "portfolio-cv-f9c8f.appspot.com",
  messagingSenderId: "22775190397",
  appId: "1:22775190397:web:2daabd3f853329c0b73214",
  measurementId: "G-0N7MTNT6LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);