<script setup lang="ts"> 
  import { ref, watchEffect, onMounted } from 'vue' // used for conditional rendering
  // import firebase from 'firebase/app'
  import { useRouter, useRoute, RouteLocationNormalized } from 'vue-router';
  import 'firebase/auth';
  import { getAuth, User  } from 'firebase/auth';
  import { initializeApp } from "firebase/app";
  import * as firebase from 'firebase/app';
  import 'firebase/firestore';
  import {db, auth} from './firebase/init.js'


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
// if (email !== undefined) {
//   localStorage.setItem('userEmail', email);
// }
// const userEmail = localStorage.getItem('userEmail');
// const userEmail = ref("");

const isLoggedIn = ref(true)
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user: User | null) {
      if (user) {
        isLoggedIn.value = true // if we have a user
        // userEmail.value = user.email || ''; // store the user email in the ref
      } else {
        isLoggedIn.value = false // if we do not
        // userEmail.value = ''; // store the user email in the ref
      }
  })
  // const email = userEmail.value || route.query.email || '';
const signOut = () => {
    auth.signOut()
    router.push('/Login')
  }


</script>
<template>
    <div class="navbar">
      <nav class="nav-options">
        <span v-if="isLoggedIn">
          <span v-if="$route.path === '/'">
            <router-link to="/"> HelloWordle </router-link> |
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