import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAj1M4HAhtwhOh3huzHQqmZktRqwI8ic0o",
  authDomain: "react--clone-34f11.firebaseapp.com",
  projectId: "react--clone-34f11",
  storageBucket: "react--clone-34f11.appspot.com",
  messagingSenderId: "533435977003",
  appId: "1:533435977003:web:dd0347631bbe2bc2c0c96e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
