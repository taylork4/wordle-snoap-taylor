<script setup lang="ts"> 
  import { ref } from 'vue' // used for conditional rendering
  import { useRouter, useRoute, RouteLocationNormalized } from 'vue-router';
  import 'firebase/auth';
  import { User } from 'firebase/auth';
  import 'firebase/firestore';
  import {auth} from './firebase/init.js'
  
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

const isLoggedIn = ref(true)
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user: User | null) {
      if (user) {
        isLoggedIn.value = true // if we have a user
        userUid.value = user.uid; // store the user UID in the ref
        console.log(`User UID: ${userUid.value}`);        
      } else {
        isLoggedIn.value = false // if we do not
        userUid.value = ''; // clear the user UID ref
      }
  })

/* Allows user to sign out and sends them back to the home screen */
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
  <div v-if="$route.path === '/'">
    <h1 style="color: darkblue; font-size: 50px;">SnoTay Wordle</h1>
    <h4 style="font-size: large; color: black;">
      Cameron Snoap<br>
      Kyle Taylor
    </h4>
    <h2> <br> Click <u>Sign Up</u> if you don't already have an account! </h2>
    <h2> Or, click <u>Login</u> if you do! </h2>
  </div>
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