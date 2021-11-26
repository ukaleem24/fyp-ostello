import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddListing from "../views/AddListing.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addlisting",
    name: "AddListing",
    component: AddListing,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
