// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmOMSmD6spU-Eb_KcngpSvcRrosXl_OvA",
  authDomain: "appmultiplataforma-63abf.firebaseapp.com",
  projectId: "appmultiplataforma-63abf",
  storageBucket: "appmultiplataforma-63abf.appspot.com",
  messagingSenderId: "330454406825",
  appId: "1:330454406825:web:c1e113b0f1178b7353fbb8",
};

initializeApp(firebaseConfig);

export const database = getFirestore();