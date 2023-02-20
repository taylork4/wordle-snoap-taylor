<script setup lang="ts">
import { ref, Ref } from 'vue'
const gameName = ref("SnoTay Wordle")
const userWords: Ref<string[]> = ref([])

function addOneWord() {
  userWords.value.push("")
  userWords.value.push("")
  userWords.value.push("")
  userWords.value.push("")
  userWords.value.push("")
}

function clearAll() {
  userWords.value.splice(0)
}

addOneWord()
addOneWord()
addOneWord()
addOneWord()
addOneWord()

</script>

<template>
  <p>Start your work of {{ gameName }} in this file</p>
  <div id="grid">
    <p v-for="(w, pos) in userWords" v-bind:key="pos">
      <div id = "cell">
        <input style = "width: 50px; font-size: 50px; border: 5px solid black;" placeholder="⠀⠀" />
      </div>
    </p>
  </div>
  <div id = "buttons">
    <button @click="clearAll">New Game</button>
    <button @click="addOneWord">Check</button>
  </div>
</template>

<style scoped>
  #grid {
    /* min-width: 100vh; */
    /* display: grid; */
    /* min-width: 100px; */
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);  
    grid-gap: 8px;
    
    /* display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    font-size: 100px;
    grid-gap: 20px; */
    /* width: 0em; */
  }

  #cell {
    /* width: 50px;  */
    /* font-size: 1em; */
    /* font-weight: 500; */
    

  }

  #buttons {
    /* display: grid; */
    /* padding: 20px; */
  }
</style>