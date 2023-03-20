<script setup lang="ts">
  import { ref, Ref, watchEffect } from "vue";
  import {useRouter} from 'vue-router';
  import 'firebase/auth';

  import { initializeApp } from "firebase/app";
  import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
  import * as firebase from 'firebase/app';
  import 'firebase/firestore';
  import {CollectionReference, collection, addDoc, DocumentReference, setDoc, doc} from 'firebase/firestore';

  import {db, auth} from '../firebase/init.js'
  const gs = doc(db, 'gameStats/user')

  // type GameStat = {
  //   word: string;
  //   attempts: string;
  //   gameNum: number;
  //   gameWin: string;
  //   time: number;
  //   date: string;
  // }
const router = useRouter();
// define a variable of type GameStat
// const gameStat: GameStat = {
//   word: "example",
//   attempts: "3",
//   gameNum: 1,
//   gameWin: "yes",
//   time: 30,
//   date: "2022-03-20"
// };

// const gameStatsCollection = db.collection('gameStats');
// let gameStats = gameStatsCollection;
// let gs = collection(db, 'gameStats');

// addDoc(gs,
// {
//   word: "John",
//   attempts: 3,
//   gameNum: 1,
//   gameWin: "Lost",
//   time: 30,
//   date: "2022-03-20"
// })
//  .then((grDoc: DocumentReference) => {
//   console.log('New document added with ID:', grDoc.id);
//  })
//  .catch((err:any) => {
//   console.error('Error adding document:', err);
// });


</script>

<template>
  <h1>Game Statistics</h1>
  <router-view />
</template>