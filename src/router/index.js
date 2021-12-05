import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddListing from "../views/AddListing.vue";
import ListingView from "../views/ListingsView.vue";
import ListingDetail from "../views/ListingDetail.vue";
import RegisterUser from "../views/Register.vue";
import EditProfile from "../views/dashboard/EditProfile.vue";
import Listing from "../views/dashboard/Listing.vue";
import Booking from "../views/dashboard/Bookings.vue";
import SearchPage from "../views/SearchPage.vue";

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
    path: "/room/:roomId",
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
  {
    path: "/dashboard/listing",
    name: "testing",
    component: Listing,
  },
  {
    path: "/dashboard/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/search/:searchQuery",
    name: "Search Page",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
