import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("."),
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
    }
  ]
});
export default router;