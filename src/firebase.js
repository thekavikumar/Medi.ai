// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyABEQ1hh1tK81b-Aw174H52LFHSp_FV1n4",
  authDomain: "medai-be803.firebaseapp.com",
  projectId: "medai-be803",
  storageBucket: "medai-be803.appspot.com",
  messagingSenderId: "990498884017",
  appId: "1:990498884017:web:45af3a771754c1f7175590",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
