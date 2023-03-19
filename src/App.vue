<script setup lang="ts"> 
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from 'firebase/app'
  import { useRouter, useRoute, RouteLocationNormalized } from 'vue-router';
  import 'firebase/auth';
  import { getAuth } from 'firebase/auth';
  import { initializeApp } from "firebase/app";
  const router = useRouter()
  interface CurrentRoute extends RouteLocationNormalized {
  query: {
    email?: string;
  };
}
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

  
const route = useRoute() as CurrentRoute;
const email = route.query.email;
const isLoggedIn = ref(true)
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })

const signOut = () => {
    auth.signOut()
    router.push('/')
  }

</script>
<template>
    <div class="navbar">
      <nav class="nav-options">
        <router-link to="/">Home</router-link> |
        <router-link to="/HelloWordle">Game</router-link> |
        <span v-if="isLoggedIn">
          <button @click="signOut"> Logout </button>
        </span>
        <span v-else>
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
  <div v-if="$route.path === '/'">
    <h1 style="color: darkblue; font-size: 50px;">SnoTay Wordle</h1>
    <h4 style="font-size: large; color: black;">
      Cameron Snoap<br>
      Kyle Taylor
    </h4>
  </div>
  <!-- <Home /> -->
  <!-- <HelloWordle /> -->
  <router-view />
</template>

<style scoped>
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