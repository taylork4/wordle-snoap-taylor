<script setup lang="ts"> 
  import { ref, watchEffect, onMounted } from 'vue' // used for conditional rendering
  // import firebase from 'firebase/app'
  import { useRouter, useRoute, RouteLocationNormalized } from 'vue-router';
  import 'firebase/auth';
  import { getAuth, User  } from 'firebase/auth';
  import { initializeApp } from "firebase/app";
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import {CollectionReference, collection, addDoc, DocumentReference} from 'firebase/firestore';
  import {db, auth} from './firebase/init.js'
  
  // import { firestore } from 'firebase';



  // import { auth } from '@/firebase';
  const router = useRouter()
  interface CurrentRoute extends RouteLocationNormalized {
  query: {
    email?: string;
  };
  }



const route = useRoute() as CurrentRoute;
const email = route.query.email;
let currentUser: User | null = null;
const userUid = ref('');
// const gameStatsCollection = db.collection('gameStats');

// gameStatsCollection.add({
//   // Add your document data here as key-value pairs
//   // For example:
//   score: 100,
//   playerName: "John"
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error: unknown) => {
//   console.error("Error adding document: ", error);
// });
// if (email !== undefined) {
//   localStorage.setItem('userEmail', email);
// }
// const userEmail = localStorage.getItem('userEmail');
// const userEmail = ref("");
// const firebase: any = require('firebase');
// // const firestore = firebase.firestore();
// const gs = firestore.collection('gameStats');
// const gameStatsCollection = db.collection('gameStats');
// let gameStats = gameStatsCollection;
// let gs = collection(db, 'gameStats');
const isLoggedIn = ref(true)
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user: User | null) {
      if (user) {
        isLoggedIn.value = true // if we have a user
        // userEmail.value = user.email || ''; // store the user email in the ref
        userUid.value = user.uid; // store the user UID in the ref
        console.log(`User UID: ${userUid.value}`);        
        // addDoc(gameStats,
        // {
        //   word: "John",
        //   attempts: 3,
        //   gameNum: 1,
        //   gameWin: "Lost",
        //   time: 30,
        //   date: "2022-03-20"
        // })
        // .then((grDoc: DocumentReference) => {
        //   console.log('New document added with ID:', grDoc.id);
        // })
        // .catch((err:any) => {
        //   console.error('Error adding document:', err);
        // });
      } else {
        isLoggedIn.value = false // if we do not
        userUid.value = ''; // clear the user UID ref
        // userEmail.value = ''; // store the user email in the ref
      }
  })
  // const email = userEmail.value || route.query.email || '';
const signOut = () => {
    auth.signOut()
    router.push('/')
  }



</script>
<template>
    <div class="navbar">
      <nav class="nav-options">
        <span v-if="isLoggedIn">
          <span v-if="$route.path === '/'">
            <router-link to="/HelloWordle"> HelloWordle </router-link> |
          </span>
          <span v-if="$route.path === '/HelloWordle'">
            <router-link to="/GameStats"> Game Statistics </router-link> |
          </span>
          <span v-if="$route.path === '/GameStats'">
            <router-link to="/HelloWordle"> HelloWordle </router-link> |
          </span>
          <button @click="signOut"> Logout </button>
        </span>
        <span v-else>
          <!-- <router-link to="/"> Home </router-link> | -->
          <router-link to="/SignUp"> Sign Up </router-link> |
          <router-link to="/Login"> Login </router-link>
        </span>
      </nav>
      <div class="email">
        <h :key="$route.fullPath">{{$route.query.email}}</h>
      </div>
    </div>
  <!-- <span v-if="isLoggedIn"
        >>
        <button @click="signOut">Logout</button>
  </span> -->
  <div v-if="$route.path === '/'"> <!--v-if="$route.path === '/HelloWordle' || -->
    <h1 style="color: darkblue; font-size: 50px;">SnoTay Wordle</h1>
    <h4 style="font-size: large; color: black;">
      Cameron Snoap<br>
      Kyle Taylor
    </h4>
    <h2> <br><br> Click <u>Sign Up</u> if you don't already have an account! </h2>
    <h2> Or, click <u>Login</u> if you do! </h2>
  </div>
  <!-- <Home /> -->
  <!-- <HelloWordle /> -->
  <router-view />
</template>

<style>
@import url('./style.css');
.navbar {
  display: flex;
  align-items: center;
}

.nav-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.email {
  margin-left: auto;
}
</style>