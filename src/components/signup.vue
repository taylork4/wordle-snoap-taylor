
<script setup lang="ts">
// import { ref, defineProps, computed, withDefaults, Ref } from "vue"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// //FIREBASE STUFF
// /******************************************************************************************************/
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAC0VT8m3ZspBjn-5gcXp1Rck1hq_c0lu4",
//   authDomain: "wordle-snoap-taylor.firebaseapp.com",
//   projectId: "wordle-snoap-taylor",
//   storageBucket: "wordle-snoap-taylor.appspot.com",
//   messagingSenderId: "1064048946619",
//   appId: "1:1064048946619:web:2d319ef9b72845c96de89e",
//   measurementId: "G-1XQ3ERZCYV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// //example
// const email = "user@example.com";
// const password = "password123";

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

/********************************************************************************************************/

function signup() {
    const val = 5;
}
function login() {
    const val = 5;
}
</script>

<template>
    <div class="buttons">
        <button @click="login"> Log In  </button>
        <button @click="signup"> Sign Up  </button>
    </div>
</template>  

<style scoped>
 .buttons {
   display: flex;
   align-items: center;
   justify-content: right;
   grid-gap: 8px;
 }
</style>