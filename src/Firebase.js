import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXyCbm_DoX5vtvl9FvqzT7CkciJm0NL90",
  authDomain: "linkedin-clone-ad940.firebaseapp.com",
  projectId: "linkedin-clone-ad940",
  storageBucket: "linkedin-clone-ad940.appspot.com",
  messagingSenderId: "53607482123",

  appId: "1:53607482123:web:a9661a2017e72e9d35980e",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
