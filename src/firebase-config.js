// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, EmailAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjPU7dMr46Tich3tKtwkXbVxydaXCFxhY",
  authDomain: "blog-react-8a972.firebaseapp.com",
  projectId: "blog-react-8a972",
  storageBucket: "blog-react-8a972.appspot.com",
  messagingSenderId: "123629036211",
  appId: "1:123629036211:web:0080a6384760cd643386c6",
  measurementId: "G-4W3DMTLGL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const emailprovider = new EmailAuthProvider();