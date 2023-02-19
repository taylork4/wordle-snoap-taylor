<script setup lang="ts">
import { ref, Ref } from 'vue'
const gameName = ref("SnoTay Wordle")
const userWords: Ref<string[]> = ref([])

function addOneWord() {
  userWords.value.push("⠀⠀")
}

function clearAll() {
  userWords.value.splice(0)
}
</script>

<template>
  <p>Start your work of {{ gameName }} in this file</p>
  <button @click="addOneWord">Add "Hello"</button>
  <button @click="clearAll">Remove All</button>
  <div>
  <div id="list">
    <h v-for="(w, pos) in userWords" v-bind:key="pos">
      <div id = "listIt"> {{ w }}</div>
    </h>
  </div>
</div>
</template>

<style scoped>
  #list {
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    font-size: 100px;
    grid-gap: 20px;
  }
  #listIt {
    border: 5px solid black;
    border-style: solid;
    font-size: 50px;

  }
</style>
