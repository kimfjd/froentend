import firebase from "firebase/compat/app";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAbFQyD4GHuBnda4YQswpQOFb1YHeotV4c",
  authDomain: "photo-island-73ccd.firebaseapp.com",
  projectId: "photo-island-73ccd",
  storageBucket: "photo-island-73ccd.appspot.com",
  messagingSenderId: "783772409861",
  appId: "1:783772409861:web:77d6ceb6aa04083e6d3c6c",
  measurementId: "G-PZQYF2QYQ0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
