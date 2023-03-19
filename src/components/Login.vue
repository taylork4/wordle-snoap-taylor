<script setup lang="ts">
  import { ref, Ref } from "vue";
  import {useRouter} from 'vue-router';
  // import firebase from "firebase/app";

  import { initializeApp } from "firebase/app";
  import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

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
const router = useRouter();
let signedUp = false;


const email = ref('');
const password = ref('');
  const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((cred: UserCredential) => {
            console.log("Verification email has been sent to", cred.user?.email);
            console.log('Successfully logged in!');
            signedUp = true;
            router.push({
              name: 'HelloWordle',
              query: {email: cred.user?.email}
            });
        })
            .catch((err: any) => {
            console.error("Oops", err);
        });
    };
    
</script>

<template>
  <h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button :disabled = "signedUp" @click="login">Login</button></p>
  <h v-if="signedUp" style="color: black;"> {{email}} </h>
  <router-view />
</template>