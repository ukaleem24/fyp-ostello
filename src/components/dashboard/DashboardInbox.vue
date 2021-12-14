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
          <h5 class="myFixlabelIcon">Logout</h5>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="profile-Container">
        <h4>Your Properties:</h4>
        <br />
        <inbox-landlord
          v-for="booking in landlordBookings"
          :key="booking._id"
          :bookingDetails="booking"
        ></inbox-landlord>

        <inbox-tenant
          v-for="booking in tenantBookings"
          :key="booking._id"
          :bookingDetails="booking"
        ></inbox-tenant>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/stylesheets/dashbordStyle.css";
import InboxTenant from "./cards/InboxTenant.vue";
import InboxLandlord from "./cards/InboxLandlord.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentUser: null,
      landlordBookings: null,
      tenantBookings: null,
    };
  },
  components: {
    InboxTenant,
    InboxLandlord,
  },
  computed: {
    ...mapGetters(["getListings", "getUserImage", "getCurrentUser"]),
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
  },
  async created() {
    //if user is not logged in, push to the login page
    if (this.getCurrentUser.active === false) {
      this.$router.push("/");
    }

    //Getting bookings of current user as a tenant from server to show notifications
    try {
      this.currentUser = this.$store.getters.getCurrentUser;
      if (!this.currentUser.active) {
        this.$router.push("/login");
      }
      const response = await this.axios.get(
        "http://localhost:3000/api//booking/details/landlord/" +
          this.currentUser.id
      );
      if (response.data.success === true) {
        this.landlordBookings = response.data.bookings;
      }
    } catch (error) {
      console.log("landlord error: " + error);
    }

    //Getting bookings of current user as a tenant from server to show notifications
    try {
      this.currentUser = this.$store.getters.getCurrentUser;
      if (!this.currentUser.active) {
        this.$router.push("/login");
      }
      const response = await this.axios.get(
        "http://localhost:3000/api//booking/details/tenant/" +
          this.currentUser.id
      );
      if (response.data.success === true) {
        console.log(response.data.bookings);
        this.tenantBookings = response.data.bookings;
      }
    } catch (error) {
      console.log("landlord error: " + error);
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
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  },
};
</script>
<style scoped>
.grid-Container {
  margin: 20px !important;
  display: grid !important;
  grid-template-columns: auto auto;
}
.grid-item {
  padding: 10px 10px 50px 10px;
  width: 80%;
  max-height: 80%;
}
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
