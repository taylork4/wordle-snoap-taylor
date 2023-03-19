<script setup lang="ts"> 
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from 'firebase/app'
  import { useRouter } from 'vue-router'
  import 'firebase/auth';
  
  const router = useRouter()

  


</script>
<template>
  <nav>
    <router-link to="/"> Home </router-link> | 
    <router-link to="/HelloWordle"> Game </router-link> |
    <router-link to="/SignUp"> Sign Up </router-link> |
    <router-link to="/Login"> Login </router-link>
  </nav>
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
</style>