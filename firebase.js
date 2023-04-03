// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWT9p6N3em3SYO7MF6-T7NUB3vlENWxRM",
  authDomain: "coffee-cab1d.firebaseapp.com",
  projectId: "coffee-cab1d",
  storageBucket: "coffee-cab1d.appspot.com",
  messagingSenderId: "815291022494",
  appId: "1:815291022494:web:120fc2012f9babed054f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;