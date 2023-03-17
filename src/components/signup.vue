<script setup lang="ts">
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