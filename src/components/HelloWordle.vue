<script setup lang="ts">
import { ref, Ref } from 'vue'
const gameName = ref("Wordle Clone")
const userWords: Ref<string[]> = ref([])

function addOneWord() {
  userWords.value.push("Hello")
}

function clearAll() {
  userWords.value.splice(0)
}
</script>

<template>
  <p>Start your work of {{ gameName }} in this file</p>
  <button @click="addOneWord">Add "Hello"</button>
  <button @click="clearAll">Remove All</button>
  <ul>
    <li v-for="(w, pos) in userWords" v-bind:key="pos">{{ w }}</li>
  </ul>
</template>

<style scoped>

</style>
