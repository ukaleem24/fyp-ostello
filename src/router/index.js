import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddListing from "../views/AddListing.vue";
import ListingView from "../views/ListingsView.vue";
import ListingDetail from "../views/ListingDetail.vue";
import RegisterUser from "../views/Register.vue";
import EditProfile from "../views/dashboard/EditProfile.vue";

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
  {
    path: "/listingdetail",
    name: "ListingDetail",
    component: ListingDetail,
  },
  {
    path: "/register/newuser",
    name: "RegisterUser",
    component: RegisterUser,
  },
  {
    path: "/dashboard/profile",
    name: "EditProfile",
    component: EditProfile,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
