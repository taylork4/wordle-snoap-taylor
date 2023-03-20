import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth, User } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAC0VT8m3ZspBjn-5gcXp1Rck1hq_c0lu4",
    authDomain: "wordle-snoap-taylor.firebaseapp.com",
    projectId: "wordle-snoap-taylor",
    storageBucket: "wordle-snoap-taylor.appspot.com",
    messagingSenderId: "1064048946619",
    appId: "1:1064048946619:web:2d319ef9b72845c96de89e",
    measurementId: "G-1XQ3ERZCYV"
  };
  
  // Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// init firestore service
const db = getFirestore()
// export default db
export { db, auth }