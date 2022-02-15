import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
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
    component: () =>
      import(/* webpackChunkName: "disneyplus.js" */ "../views/DisneyPlus.vue"),
  },
  {
    path: "/Kids",
    name: "Kids",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "kids.js" */ "../views/Kids.vue"),
  },
  {
    path: "/in/:id",
    name: "Filter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "diff.js" */ "../views/About.vue"),
    props: (route) => ({ id: String(route.params.id) }),
  },
  {
    path: "/Admin",
    name: "AdminLogIn",
    component: () =>
      import(/* webpackChunkName: "admin.js" */ "../views/AdminLogIn.vue"),
    children: [
      {
        path: "/Movies",
        name: "AddMovies",
        component: () =>
          import(
            /* webpackChunkName: "movies.js" */ "../components/admin/Movies.vue"
          ),
      },
    ],
  },
  {
    path: "/DashBoard",
    name: "AdminDashBoard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard.js" */ "../views/AdminDashBoard.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Subscribe",
    name: "Subscribe",
    component: () =>
      import(/* webpackChunkName: "subscribe.js" */ "../views/Subscribe.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register.js" */ "../views/Register.vue"),
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
