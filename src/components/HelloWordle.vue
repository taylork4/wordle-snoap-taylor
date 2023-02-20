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
let checks: number = 0;
let congrats: boolean = false;

function newGame() {
  congrats = false;
  userWords.value.splice(0)
  letterColor.value.splice(0)
  for (let i = 0; i < 30; i++) {
    userWords.value.push("");
    letterColor.value.push("");
  }
}

function checkAnswer() {
  const secretWord = "dolly" //test word
  let tempArray: Array<string> = [];
  for (let k = 0; k <= 25; k += 5) {
    for (let i = 0; i < 5; i++) {
      if (userWords.value[i + k] == "") {
        userWords.value[i + k] = "" //Blank cell
      }
      else if (userWords.value[i + k].toLowerCase() == secretWord.charAt(i)
        && !(tempArray.includes(userWords.value[i + k]))) {
        letterColor.value[i + k] = "G" //correct letter in correct location
        tempArray.push(userWords.value[i + k]);
      }
      else if (secretWord.includes(userWords.value[i + k].toLowerCase())
        && !(tempArray.includes(userWords.value[i + k]))) {
        letterColor.value[i + k] = "Y" //correct letter wrong spot
        tempArray.push(userWords.value[i + k]);
      }
      else {
        letterColor.value[i + k] = "B" //wrong letter
      }
    }
    tempArray.splice(0)
  }
  checkWin()
}

// function checkAnswer() {
//   const secretWord = "dolly" //test word
//   for (let k = 0; k <= 25; k += 5) {
//     for (let i = 0; i < 5; i++) {
//       if (userWords.value[i + k] == "") {
//         userWords.value[i + k] = "" //Blank cell
//       } else if (userWords.value[i + k].toLowerCase() == secretWord.charAt(i)) {
//         letterColor.value[i + k] = "G" //correct letter in correct location
//       } else if (secretWord.includes(userWords.value[i + k].toLowerCase())){
//         letterColor.value[i + k] = "Y" //correct letter wrong spot
//       } else {
//         letterColor.value[i + k] = "B" //wrong letter
//       }
//     }
//   }
//   checkWin()
// }

function checkWin() {
  let numFound = 0;
  for (let i = 0; i < 30; i++) {
    if (letterColor.value[i] == "G") {
      numFound++;
    }
    if (numFound == 5) {
      win();
    } else if ((i + 1) % 5 == 0) {
      numFound = 0;
    }
  }
}

function win() {
  congrats = true;
}

</script>

<template>
  <h>
    <div id="grid">
      <p v-for="(w, pos) in userWords" v-bind:key="pos">
        <input class = "cell" v-if = "letterColor[pos] == ''" v-model = "userWords[pos]"/>
        <input class = "cell" id = "wrong" v-else-if = "letterColor[pos] == 'B'" v-model = "userWords[pos]"/>
        <input class = "cell" id = "right" v-else-if = "letterColor[pos] == 'G'" v-model = "userWords[pos]"/>
        <input class = "cell" id = "misplaced" v-else-if = "letterColor[pos] == 'Y'" v-model = "userWords[pos]"/>
      </p>
    </div>
  </h>
  <h v-if = "congrats">
    <h1 > 🎊 Congratulations! You Win! 🎊 </h1>
    <h2> Tap the 'New Game' button to play again! </h2>
  </h>
  <div class = "buttons">
    <button @click="newGame"> New Game </button>
    <button v-if = "!congrats" @click="checkAnswer"> Check Answer </button>
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
    border: 5px solid rgb(133, 237, 255);
    color: white;
    background-color: black;
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