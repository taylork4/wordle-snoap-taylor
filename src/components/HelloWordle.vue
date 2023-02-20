<script setup lang="ts">
import { ref, Ref } from 'vue'

const gameName = ref("SnoTay Wordle")
const userWords: Ref<string[]> = ref(["", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",])
const letterColor: Ref<number[]> = ref([0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0,])
let checks: number = 0
let checksShow: boolean = true

function newGame() {
  userWords.value.splice(0)
  for (let i = 0; i < 30; i++) {
    userWords.value.push("");
  }
}

function checkAnswer() {
  const secretWord = "alpin" //test word
  for (let k = 0; k <= 25; k += 5) {
    for (let i = 0; i < 5; i++) {
      if (userWords.value[i + k] == "") {
        userWords.value[i + k] = "" //correct letter wrong spot
      } else if (userWords.value[i + k].toLowerCase() == secretWord.charAt(i)) {
        userWords.value[i + k] = "G" //correct letter in correct location
      } else if (secretWord.includes(userWords.value[i + k].toLowerCase())){
        userWords.value[i + k] = "Y" //correct letter wrong spot
      }
      else {
        userWords.value[i + k] = "B" //wrong letter
      }


    }
  } 
}

</script>

<template>
  <p>Start your work of {{ gameName }} in this file</p>
  <div id="grid">
    <p v-for="(w, pos) in userWords" v-bind:key="pos">
      <!-- <input id = "cS1" v-show ="checksShow == true" v-model = "userWords[pos]"/>
      <input id = "cS2" v-show ="checksShow == false" v-model = "userWords[pos]"/> -->

        <!-- <input id = "cS2" v-if="checks == 1" v-model = "userWords[pos]"/> -->
        <input id = "cS1" v-model = "userWords[pos]"/>

    </p>
  </div>
  <div id = "buttons">
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

  #cS1 {
    text-transform: uppercase;
    text-align: center;
    width: 100px;
    height: 100px;
    align-self: center;
    font-size: 100px;
    border: 5px solid black;
    /* background-color: blue; */
  }

  /* #cS2 {
    text-transform: uppercase;
    text-align: center;
    width: 100px;
    height: 100px;
    align-self: center;
    font-size: 100px;
    border: 5px solid black;
    background-color: blue;
  } */

  #buttons {
    /* display: grid; */
    /* padding: 20px; */
  }
</style>