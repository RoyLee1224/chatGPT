import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB7sqZqjHfHhqO65jYywk-8BcMIq3cDFg",
  authDomain: "g-chatgpt.firebaseapp.com",
  projectId: "g-chatgpt",
  storageBucket: "g-chatgpt.appspot.com",
  messagingSenderId: "753326856442",
  appId: "1:753326856442:web:465327fdf67b9488d39143"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig) ;
const db = getFirestore(app)

export { db } 