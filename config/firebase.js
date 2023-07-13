// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmorVung9rWDQ39LVBQL2C7MOsoH1r628",
  authDomain: "elite-chat-30c9c.firebaseapp.com",
  projectId: "elite-chat-30c9c",
  storageBucket: "elite-chat-30c9c.appspot.com",
  messagingSenderId: "678888243221",
  appId: "1:678888243221:web:655d2ebdf63ad8bf568e1c"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const firestore=getFirestore();