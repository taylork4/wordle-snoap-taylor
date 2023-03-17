<script setup lang="ts"> 

// import HelloWordle from './components/HelloWordle.vue'
// import Home from './components/Home.vue'
</script>
<template>
  <nav>
    <router-link to="/"> Home </router-link> | 
    <router-link to="/HelloWordle"> Game </router-link> |
    <router-link to="/SignUp"> Sign Up </router-link>
  </nav>
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