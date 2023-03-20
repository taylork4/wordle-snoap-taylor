import { createRouter, createWebHistory } from "vue-router";
import 'firebase/firestore';
import {CollectionReference, collection, addDoc, DocumentReference, setDoc, doc} from 'firebase/firestore';
import {db, auth} from '../firebase/init.js'

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