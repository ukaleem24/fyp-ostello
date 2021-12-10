<template>
  <the-header class="headerStyle"></the-header>
  <!--header area end-->
  <!--mobile navigation bar start-->
  <!--mobile navigation bar end-->
  <!--sidebar start-->
  <div class="wholeBody">
    <div class="sidebar-dashboard">
      <div class="profile_info">
        <img :src="getUserImage" class="profile_image" alt="" />
        <h4 class="userName">Jessica</h4>
      </div>

      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="user"></font-awesome-icon>
          <h5 @click="profile" class="myFixlabelIcon">Profile</h5>
        </div>
      </div>

      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="inbox"></font-awesome-icon>
          <h5 class="myFixlabelIcon">Inbox</h5>
        </div>
      </div>
      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="landmark"></font-awesome-icon>
          <h5 @click="booking" class="myFixlabelIcon">Bookings</h5>
        </div>
      </div>
      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="th-list"></font-awesome-icon>
          <h5 @click="listing" class="myFixlabelIcon">Listings</h5>
        </div>
      </div>
      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="money-check-alt"></font-awesome-icon>
          <h5 class="myFixlabelIcon">My Payments</h5>
        </div>
      </div>
      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
          <h5 class="myFixlabelIcon">Logout</h5>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="profile-Container">
        <div class="listing-result">
          <h4>{{ getListings.length }} Results Found</h4>
        </div>
        <listing-card
          v-for="listing in getListings"
          :key="listing.id"
          :id="listing.id"
          :price="listing.price"
          :address="listing.address"
          :type="listing.type"
          :image="listing.images[0].image"
          :description="listing.description"
          :currency="listing.currency"
        ></listing-card>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/stylesheets/dashbordStyle.css";
import ListingCard from "./cards/LandlordCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ListingCard,
  },
  computed: {
    ...mapGetters(["getListings", "getUserImage"]),
  },
  methods: {
    profile() {
      this.$router.push("/dashboard/profile");
    },
    listing() {
      this.$router.push("/dashboard/listings");
    },
    booking() {
      this.$router.push("/dashboard/booking");
    },
  },
};
</script>
<style scoped>
.sidebar-dashboard .icon-container {
  color: gainsboro;
  display: block;
  width: 100%;
  text-decoration: none;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
  height: 9vh;
  padding-top: 3vh;
}
.icon-label {
  margin: 0px 50px 0px 50px;
  font-size: 19px;

  display: flex;
}
.sidebar-dashboard .icon-container:hover {
  background: #2c3e50;
  color: white;
}
.sidebar-dashboard .myFixlabelIcon {
  padding-left: 10px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}

.headerStyle {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}

.myfix {
  margin: 20px 10px 10px 20px;
}
.profile-Container {
  padding-top: 30px;
  margin: 10px;
  font-family: "Roboto", sans-serif;
}

h4 {
  color: grey;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
}

.wrap-listing {
  width: 300px;
  font-family: "Roboto", sans-serif;
}
.listing-result {
  padding: 5px 5px 30px;
}
/*////////////////////////////////////////////////////////////////////////////////////////*/
</style>
