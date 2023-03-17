import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("."),
    },
    {
      path: "/HelloWordle",
      component: () => import("../components/HelloWordle.vue"),
    },
    {
      path: "/SignUp",
      component: () => import("../components/SignUp.vue"),
    },
    {
      path: "/Login",
      component: () => import("../components/Login.vue"),
    }
  ]
});
export default router;