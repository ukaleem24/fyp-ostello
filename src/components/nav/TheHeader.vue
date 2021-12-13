<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="header-wrap">
            <div id="logo" class="logo">
              <router-link to="/" title=""> Ostello </router-link>
            </div>
            <!-- /.logo -->
            <div class="nav-wrap">
              <nav id="mainnav" class="mainnav">
                <ul class="menu">
                  <li>
                    <a href="#" title="">Explore</a>
                    <ul class="submenu">
                      <li>
                        <a href="explore-v1.html" title=""
                          >Explore Map Zoom In</a
                        >
                      </li>
                      <li>
                        <a href="explore-v2.html" title=""
                          >Explore Map Zoom Out</a
                        >
                      </li>
                      <li>
                        <a href="explore-v3.html" title="">Explore Map List</a>
                      </li>
                      <li>
                        <a href="explore-v4.html" title="">Explore Grid</a>
                      </li>
                      <li>
                        <router-link to="/my/listings"
                          >Explore List</router-link
                        >
                      </li>
                      <li>
                        <a href="explore-detail.html" title=""
                          >Explore Details</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" title="">Pages</a>
                    <ul class="submenu">
                      <li>
                        <a href="index.html" title="">Index Layout</a>
                      </li>
                      <li>
                        <a href="404.html" title="">404 Page</a>
                      </li>
                      <li>
                        <a href="addlisting.html" title="">Add Listings</a>
                      </li>
                      <li>
                        <a href="comingsoon.html" title="">Comming Soon</a>
                      </li>
                      <li>
                        <a href="contact.html" title="">Contact</a>
                      </li>
                      <li>
                        <a href="price.html" title="">Price Page</a>
                      </li>
                      <li>
                        <a href="work.html" title="">How It Works</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html" title="">Blog</a>
                    <ul class="submenu">
                      <li>
                        <a href="blog.html" title="">Blog</a>
                      </li>
                      <li>
                        <a href="blog-single.html" title="">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/login">Log In</router-link>
                  </li>
                  <li>
                    <router-link to="/register/newuser">Sign Up</router-link>
                  </li>
                </ul>
              </nav>
              <!-- /.mainnav -->
              <div class="button-header">
                <router-link to="/addlisting" title=""
                  ><i class="ti-plus"></i>Add Your Properties</router-link
                >
              </div>
              <div class="show-search">
                <nav id="mainnav" class="mainnav">
                  <ul class="menu myNewfix">
                    <li>
                      <div class="show-search">
                        <div class="login-icon-container">
                          <div class="myfix">
                            <font-awesome-icon
                              v-if="getCurrentUser.active === false"
                              icon="user-circle"
                            ></font-awesome-icon>
                            <h6
                              v-if="getCurrentUser.active === false"
                              class="user-name"
                            >
                              Log In
                            </h6>
                            <img
                              class="login-img"
                              v-if="
                                getCurrentUser.active === true &&
                                gotUserPofileImage === true
                              "
                              :src="'http://localhost:3000/' + profileImage"
                              alt=""
                            />
                            <img
                              class="login-img"
                              v-if="
                                gotUserPofileImage === false &&
                                getCurrentUser.active === true
                              "
                              :src="getUserImage"
                              alt=""
                            />
                            <h6
                              v-if="getCurrentUser.active === true"
                              class="user-name"
                            >
                              HI, {{ getCurrentUser.firstName.toUpperCase() }}
                            </h6>
                            <div class="arrow-down-container">
                              <font-awesome-icon
                                v-if="getCurrentUser.active === true"
                                class="arrow-down"
                                icon="angle-down"
                              ></font-awesome-icon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul v-if="getCurrentUser.active === true" class="submenu">
                        <li>
                          <router-link to="/dashboard/profile"
                            >Profile</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/dashboard/inbox"
                            class="myFixlabelIcon"
                            >Inbox</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/dashboard/booking"
                            >Bookings</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/dashboard/listings"
                            >Listings</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/my/listings"
                            >My Payments</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/my/listings">Logout</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- /.show-search -->
              <div class="btn-menu">
                <span></span>
              </div>
              <!-- //mobile menu button -->
            </div>
            <!-- /.nav-wrap -->
          </div>
          <!-- /.header-wrap -->
        </div>
        <!-- /.col-md-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /.header -->
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      profileImage: null,
      gotUserPofileImage: false,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser", "getUserImage"]),
  },
  // created() {
  //   console.log(this.getCurrentUser);
  // },
  async created() {
    this.profileImage = this.getUserImage;
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
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  },
};
</script>
<style scoped>
.login-img {
  width: 35px;
  height: 35px;
  border-radius: 100px;
}
.login-icon-container {
  color: #2c3e50;

  line-height: 30px;
  border-radius: 50%;
  margin: 25px 0 20px;
  position: relative;
  padding-right: 20px !important;
  font-size: 30px;
}
.myfix {
  display: flex;
  padding: 10px;
  border-radius: 10px;
}
.myfix:hover {
  background-color: #f5f5f5;
}
.user-name {
  font-size: 15px !important;
  font-weight: 400;
  padding: 7px 7px;
}
.arrow-down-container {
  line-height: 0px;
  padding: 6px;
}
.arrow-down {
  font-size: 20px !important;
}
.nav-wrap {
  margin-right: 0px !important;
}
.submenu {
  opacity: 0;
  z-index: 9999;
  position: absolute;
  width: 250px;
  background-color: #222;
  top: 150px;
  left: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#mainnav ul.myNewfix > li {
  margin-right: 1px !important;
}
.show-search {
  margin-left: 2px !important;
}
</style>
