<script setup lang="ts">
import { ref, Ref } from 'vue'
const gameName = ref("SnoTay Wordle")
const userWords: Ref<string[]> = ref(["", "", "", "", "",
  "", "", "", "", "",
  "", "", "", "", "",
  "", "", "", "", "",
  "", "", "", "", "",
  "", "", "", "", "",])

function newGame() {
  userWords.value.splice(0)
  for (let i = 0; i < 30; i++) {
    userWords.value.push("");
  }
}

function checkAnswer() {
  const secretWord = "alpin" //test word
  for (let k = 0; k <= 25; k+=5) {
    for (let i = 0; i < 5; i++) {
      if (userWords.value[i + k].toLowerCase() == secretWord.charAt(i)) {
        userWords.value[i + k] = "G"; //correct letter in correct location
      }
      else if(secretWord.includes(userWords.value[i + k])){
        userWords.value[i + k] = "Y"; //correct letter wrong spot
      }
      else {
        userWords.value[i + k] = "B"; //wrong letter
      }

    }
  }
}

</script>

<template>
  <p>Start your work of {{ gameName }} in this file</p>
  <div id="grid">
    <p v-for="(w, pos) in userWords" v-bind:key="pos">
    <div id="cell">
      <input v-model="userWords[pos]"
        style="text-transform: uppercase; text-align: center; width: 100px; height: 100px; align-self: center; font-size: 100px; border: 5px solid black;" />
    </div>
    </p>
  </div>
  <div id="buttons">
    <button @click="newGame">New Game</button>
    <button @click="checkAnswer">Check Answer</button>
    <!-- <button @click="addOneWord">Check</button> -->
  </div>
</template>

<style scoped>
#grid {
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