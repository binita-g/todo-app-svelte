// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bOKAyQdkQM3DjVL36uMR_gP4_F7KfW4",
  authDomain: "todo-app-f57a4.firebaseapp.com",
  projectId: "todo-app-f57a4",
  storageBucket: "todo-app-f57a4.appspot.com",
  messagingSenderId: "155489259032",
  appId: "1:155489259032:web:bc87237e37b22df705bd6d",
  measurementId: "G-4YJ3VWPG4Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();