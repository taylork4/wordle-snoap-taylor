import { createRouter, createWebHistory } from "vue-router";
import 'firebase/firestore';
import {CollectionReference, collection, addDoc, DocumentReference, setDoc, doc} from 'firebase/firestore';
import {db, auth} from '../firebase/init.js'
const gs = doc(db, 'gameStats/user')
async function writeGs() {
  const docData: {
    attempts: number;
    date: string;
    gameNum: number;
    gameWin: string;
    time: number;
    word: string;
  } = {
  attempts: 2,
  date: '2022-03-20',
  gameNum: 1,
  gameWin: 'Won',
  time: 204,
  word: 'Jodeh'
};
  try {
   await setDoc(gs, docData);
   console.log("Successful addition!");
  } catch (error) {
    console.log(`I got an error! ${error}`);
  }
}
writeGs();

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import(".")
    },
    {
      name: "HelloWordle",
      path: "/HelloWordle",
      component: () => import("../components/HelloWordle.vue"),
    },
    {
      name: "SignUp",
      path: "/SignUp",
      component: () => import("../components/SignUp.vue"),
    },
    {
      name: "Login",
      path: "/Login",
      component: () => import("../components/Login.vue"),
    },
    {
      name: "GameStats",
      path: "/GameStats",
      component: () => import("../components/GameStats.vue"),
    }
  ]
});
export default router;