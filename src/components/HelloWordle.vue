<script setup lang="ts">
import { ref, Ref } from 'vue'

const gameName = ref("SnoTay Wordle")
const userWords: Ref<string[]> = ref(["", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", ""])
const letterColor: Ref<string[]> = ref(["", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", "",
                                      "", "", "", "", ""])
let checks: number = 0
let checksShow: boolean = true

function newGame() {
  userWords.value.splice(0)
  letterColor.value.splice(0)
  for (let i = 0; i < 30; i++) {
    userWords.value.push("");
    letterColor.value.push("");
  }
}

function checkAnswer() {
  const secretWord = "alpin" //test word
  for (let k = 0; k <= 25; k += 5) {
    for (let i = 0; i < 5; i++) {
      if (userWords.value[i + k] == "") {
        userWords.value[i + k] = "" //Blank cell
      } else if (userWords.value[i + k].toLowerCase() == secretWord.charAt(i)) {
        letterColor.value[i + k] = "G" //correct letter in correct location
      } else if (secretWord.includes(userWords.value[i + k].toLowerCase())){
        letterColor.value[i + k] = "Y" //correct letter wrong spot
      } else {
        letterColor.value[i + k] = "B" //wrong letter
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
        <input class = "cell" v-if="letterColor[pos] == ''" v-model = "userWords[pos]"/>
        <input class = "cell" id = "wrong" v-else-if="letterColor[pos] == 'B'" v-model = "userWords[pos]"/>
        <input class = "cell" id = "right" v-else-if="letterColor[pos] == 'G'" v-model = "userWords[pos]"/>
        <input class = "cell" id = "misplaced" v-else-if="letterColor[pos] == 'Y'" v-model = "userWords[pos]"/>

    </p>
  </div>
  <div class = "buttons">
    <button @click="newGame">New Game</button>
    <button @click="checkAnswer">Check Answer</button>
    <!-- <button @click="addOneWord">Check</button> -->
  </div>
</template>

<style scoped> 

  #grid {
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);  
    grid-gap: 8px;
  }

  .cell {
    text-transform: uppercase;
    text-align: center;
    width: 100px;
    height: 100px;
    align-self: center;
    font-size: 100px;
    border: 5px solid black;
  }

  #wrong {
    background-color: grey;
  }

  #right {
    background-color: green;
  }

  #misplaced {
    background-color: rgb(186, 186, 3);
  }

  .buttons {
    /* width: auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 8px;
    /* display: grid-template-rows; */
    /* padding: 20px; */
  }
</style>