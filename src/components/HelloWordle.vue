
<script setup lang="ts">
import { ref, Ref } from 'vue'
import Timer from "./Timer.vue" //timer

const num = ref(1) //timer

const gameName = ref("SnoTay Wordle")
const userWords: Ref<string[]> = ref(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
const letterColor: Ref<string[]> = ref(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
const words: string[] = ['amber', 'brave', 'catch', 'dream', 'earth', 'flair', 'gloom', 'happy', 'image', 'juice', 'knack', 'latch', 'birth', 'notch', 'olive', 'peace', 'quirk', 'route', 'shrug', 'toast'];
let checks: number = 0;
let congrats: boolean = false;
let gameover: boolean = false;
let secretWord: string


secretWord = words[Math.floor(Math.random() * words.length)];

function newGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  congrats = false;
  gameover = false;
  checks = 0;
  userWords.value.splice(0)
  letterColor.value.splice(0)
  for (let i = 0; i < 30; i++) {
    userWords.value.push("");
    letterColor.value.push("");
  }
}

function checkAnswer() {
  // const secretWord = "dolly" //test word
  const cellLoc = 5 * checks;
  let index = -1;
  let tempArray: Array<string> = [];

  for (let i = 0; i < 5; i++) {
    if (userWords.value[i + cellLoc] == "") {
      return;
    }
    tempArray.push(secretWord.charAt(i));
  }
  for (let i = 0; i < 5; i++) {
    if (userWords.value[i + cellLoc].toLowerCase() == secretWord.charAt(i) && tempArray.includes(userWords.value[i + cellLoc].toLowerCase())) {
      letterColor.value[i + cellLoc] = "G" //correct letter in correct location
      //Logic to check for duplicate letters in a word
      for (let j = 0; j < 5; j++) {
        if (tempArray[j] == userWords.value[i + cellLoc].toLowerCase()) {
          tempArray.splice(j, 1);
          break;
        }
      }
    } else if (secretWord.charAt(i) != userWords.value[i + cellLoc] && tempArray.includes(userWords.value[i + cellLoc].toLowerCase())) {
      letterColor.value[i + cellLoc] = "Y" //correct letter wrong spot
      //Logic to check for duplicate letters in a word
      for (let j = 0; j < 5; j++) {
        if (tempArray[j] == userWords.value[i + cellLoc].toLowerCase()) {
          tempArray.splice(j, 1);
          break;
        }
      }
    } else {
      letterColor.value[i + cellLoc] = "B" //wrong letter
    }
  }

  checkWin()
  checks += 1;
  if (checks == 6 && !congrats) {
    gameover = true;
  }
}


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
  <div style="margin-right: 100%;" id="timers">
    <Timer class="tmr" start-label="Go"></Timer>
  </div>

  <h>
    <div id="grid">
      <p v-for="(w, pos) in userWords" v-bind:key="pos">
        <input class="cell" v-if="letterColor[pos] == ''" v-model="userWords[pos]" />
        <input class="cell" id="wrong" v-else-if="letterColor[pos] == 'B'" v-model="userWords[pos]" />
        <input class="cell" id="right" v-else-if="letterColor[pos] == 'G'" v-model="userWords[pos]" />
        <input class="cell" id="misplaced" v-else-if="letterColor[pos] == 'Y'" v-model="userWords[pos]" />
      </p>
    </div>
  </h>
  <p>
    <h v-if="congrats">
      <h1> 🎊 Congratulations! You Win! 🎊 </h1>
      <h2> Tap the 'New Game' button to play again! </h2>
    </h>
    <h v-else-if="gameover">
      <h1> 😔 Game Over! No more guesses left! 😔 </h1>
      <h2> Tap the 'New Game' button to play again! </h2>
    </h>
  </p>
  <div class="buttons">
    <button @click="newGame"> New Game </button>
    <button v-if="!congrats && !gameover" @click="checkAnswer"> Check Answer </button>
  </div>
  <h5>
    Our word matching function first checks that the user has entered a
    complete five-letter word. Then it creates a temporary array with the
    letters of the secret word to check for duplicate letters in the user's
    word.
    It then loops through each letter in the user's word and compares it to
    the corresponding letter in the secret word. If the letters match and
    the letter is in the correct position, it assigns the "G" color code.
    If the letters match but are in the wrong position, it assigns the "Y"
    color code. If the letters do not match, it assigns the "B" color code.
    If the user's word contains a letter that is in the secret word, the function
    removes that letter from the temporary array to avoid counting it twice in
    the color codes.
  </h5>
  <h5>
    In this Vue3 template, a grid of input cells is displayed using an
    inline-grid layout with six rows and five columns. The "v-for" directive
    is used to iterate through the "userWords" array and display an input
    field for each element. The "v-model" directive is used to bind the
    input field to the corresponding element of the "userWords" array.

    Conditional rendering is used to change the background color of the
    input field based on the value of the "letterColor" array. Four different
    classes are defined in the "style" section, each with a different background
    color: black for the default cell, grey for a wrong letter, green for a
    correct letter in the right spot, and yellow for a correct letter in the
    wrong spot.
  </h5>
</template>  

<style scoped> #grid {
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