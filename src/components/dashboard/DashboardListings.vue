<template>
  <the-header class="headerStyle"></the-header>
  <!--header area end-->
  <!--mobile navigation bar start-->
  <!--mobile navigation bar end-->
  <!--sidebar start-->
  <div class="wholeBody">
    <div class="sidebar-dashboard">
      <div class="profile_info">
        <img
          class="profile_image"
          v-if="getCurrentUser.active === true && gotUserPofileImage === true"
          :src="'http://localhost:3000/' + profileImage"
          alt=""
        />
        <img
          class="profile_image"
          v-if="gotUserPofileImage === false"
          :src="getUserImage"
          alt=""
        />
        <h4 class="userName">{{getCurrentUser.firstName}}</h4>
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
          <h5 @click="inbox" class="myFixlabelIcon">Inbox</h5>
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
          <h5 @click="logoutUser" class="myFixlabelIcon">Logout</h5>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="profile-Container">
        <div class="listing-result">
          <h4>{{ listingData.length }} Results Found</h4>
        </div>
        <listing-card
          v-for="listing in getLandlordListing"
          :key="listing._id"
          :id="listing._id"
          :price="listing.price"
          :address="listing.address"
          :type="listing.type"
          image="https://housinganywhere.imgix.net/room/1666164/1cbe6586-3e60-4748-ab99-58664ed0eb49.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446"
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
  data() {
    return {
      listingData: [],
      gotUserPofileImage:false,
    };
  },
  components: {
    ListingCard,
  },
  computed: {
    ...mapGetters(["getLandlordListing", "getUserImage", "getCurrentUser"]),
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
    inbox() {
      this.$router.push("/dashboard/inbox");
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/");
    },
  },
  async created() {
     if (this.getCurrentUser.active === false) {
      this.$router.push("/");
    }
    //getting specfic listing Detail
    try {
      const response = await this.axios.get(
        "http://localhost:3000/api/listings/" + this.getCurrentUser.id
      );
      console.log(response.data.searchResults);
      this.listingData = response.data.searchResults;
      this.$store.dispatch("setLandlordListings", {
        listing: this.listingData,
      });
      console.log(this.getLandlordListing);
    } catch (error) {
      console.log(error.response.data.message);
    }
   
    let imageName = "";
    if (this.getCurrentUser.active === true) {
      try {
        const userId = this.getCurrentUser.id;
        //getting reviews
        const userInfoResponse = await this.axios.get(
          "http://localhost:3000/api/user/info/" + userId
        );
        imageName = userInfoResponse.data.userinfo.photo;
        this.profileImage = imageName[0];
        this.gotUserPofileImage = true;
        console.log(this.gotUserPofileImage);
        console.log();
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
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
