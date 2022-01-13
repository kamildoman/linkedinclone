import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBucVKOCSSdrvUyJdzeVPQNPcRXHBjhuhs",
  authDomain: "linkedin-clone-ba2b5.firebaseapp.com",
  projectId: "linkedin-clone-ba2b5",
  storageBucket: "linkedin-clone-ba2b5.appspot.com",
  messagingSenderId: "871261725118",
  appId: "1:871261725118:web:5fa43ac9bfffd5bcd019ef",
  measurementId: "G-021YQ3JW43",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
