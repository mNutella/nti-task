import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@views/Home/index.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("@views/NotFound/index.vue")
    }
  ]
})
