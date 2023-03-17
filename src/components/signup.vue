<script setup lang = "ts">
import { ref, Ref } from "vue"
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, UserCredential, sendEmailVerification } from "firebase/auth";

//FIREBASE STUFF
/******************************************************************************************************/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


//example
const email = ref('');
const password = ref('');

    const submit = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((cred: UserCredential) => {
            sendEmailVerification(cred.user);
            console.log("Verification email has been sent to", cred.user?.email);
            auth.signOut();
        })
            .catch((err: any) => {
            console.error("Oops", err);
        });
    };


</script>

<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="submit">Submit</button></p>
    <router-view />
  </template>

<style scoped>
 .buttons {
   display: flex;
   align-items: center;
   justify-content: right;
   grid-gap: 8px;
 }
</style>