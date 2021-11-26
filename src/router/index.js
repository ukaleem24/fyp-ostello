import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddListing from "../views/AddListing.vue";
import ListingView from "../views/ListingsView.vue";

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
  {
    path: "/my/listings",
    name: "ListingView",
    component: ListingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
