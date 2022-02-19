import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Router from "../components/router.components.vue";
import DisneyPlus from "../views/DisneyPlus.vue";
import Kids from "../views/Kids.vue";
import AdminLogIn from "../views/AdminLogIn.vue";
import AdminDashBoard from "../views/AdminDashBoard.vue";
import Subscribe from "../views/Subscribe.vue";
import Register from "../views/Register.vue";
import Forget from "../views/Forget.vue";
import Details from "../components/Details.components.vue";
import navRoutes from "./navRoutes.json";
import VideoPlay from "../components/VideoPlay.components.vue";
import User from "../services/User.services";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Disney+",
    name: "Disney+",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DisneyPlus,
  },
  {
    path: "/Kids",
    name: "Kids",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Kids,
  },
  {
    path: "/Admin",
    name: "AdminLogIn",
    component: AdminLogIn,
  },
  {
    path: "/DashBoard",
    name: "AdminDashBoard",
    component: AdminDashBoard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Subscribe",
    name: "Subscribe",
    component: Subscribe,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Forget",
    name: "Forget",
    component: Forget,
  },
  {
    path: "/in/:id",
    name: "Filter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Router,
    props: true,
    beforeEnter(to) {
      const exists = navRoutes.navRoutes.find((data) => data == to.params.id);
      if (!exists) return { name: "NotFound" };
    },
  },
  {
    path: "/in/:id/:title",
    name: "Details",
    component: Details,
    props: true,
    async beforeEnter(to) {
      const exists = await User.filterMovie({ Title: to.params.title }).then(
        (res) => res.data.filterData[0]
      );
      if (!exists) return { name: "NotFound" };
    },
  },
  {
    path: "/in/:id/:title/play/:name",
    name: "VideoPlay",
    component: VideoPlay,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "AdminLogIn" };
  }
});

export default router;
