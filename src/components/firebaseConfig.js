// https://netflix-clone-b52e1.web.app
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdGYVJhpE3-s6qhgpdfvkOaDd0ppd-PVk",
  authDomain: "netflix-clone-b52e1.firebaseapp.com",
  databaseURL: "https://netflix-clone-b52e1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-b52e1",
  storageBucket: "netflix-clone-b52e1.appspot.com",
  messagingSenderId: "227703990852",
  appId: "1:227703990852:web:ee4fc06c99790aa8772a11"
};


export  const app=firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();

