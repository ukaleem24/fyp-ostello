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
    <form
      action="#"
      @submit.prevent="saveUserInfo"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="content">
        <div class="profile-Container">
          <h3>Personal information</h3>
          <div class="myfix">
            <div class="uploadImageContainer">
              <img
                :src="personalInformation.photo"
                class="upload_image"
                alt=""
              />
              <input
                class="upload_image_button"
                type="file"
                name="photo"
                @change="uploadImage"
              />
            </div>
          </div>
          <div class="myfix">
            <div class="nameDataContainer">
              <div class="namedata">
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  v-model="getCurrentUser.firstName"
                  class="nameInput"
                />
              </div>
              <div class="namedata">
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  v-model="getCurrentUser.lastName"
                  class="nameInput"
                  placeholder="Ilyas"
                />
              </div>
            </div>
          </div>
          <div class="myfix">
            <div class="nameDataContainer">
              <div class="wrap-listing price">
                <h4>Date of birth</h4>
                <input
                  type="date"
                  name="rent"
                  id="rent"
                  v-model="personalInformation.dob"
                />
              </div>
            </div>
          </div>
          <div class="myfix">
            <div class="nameDataContainer">
              <div class="whole-radio-container">
                <h4>Gender</h4>
                <div class="radio-buttons-container">
                  <div class="radio">
                    <input
                      type="radio"
                      id="male"
                      name="Gender"
                      value="male"
                      v-model="personalInformation.gender"
                    />
                    <label for="male">Male</label>
                  </div>
                  <div class="radio">
                    <input
                      type="radio"
                      id="female"
                      name="Gender"
                      value="female"
                      v-model="personalInformation.gender"
                    />
                    <label for="female">Female</label>
                  </div>
                  <div class="radio">
                    <input
                      type="radio"
                      id="other"
                      name="Gender"
                      value="other"
                      v-model="personalInformation.gender"
                    />
                    <label for="other">Other</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="myfix">
            <div class="nameDataContainer">
              <div class="namedata">
                <label for="city">City of Residence</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  v-model="personalInformation.residence"
                />
              </div>
              <div class="namedata">
                <label for="Nationalilty">Nationalilty</label>
                <input
                  type="text"
                  id="Nationalilty"
                  name="Nationalilty"
                  v-model="personalInformation.nationality"
                />
              </div>
            </div>
          </div>
          <div class="myfix">
            <div class="nameDataContainer">
              <div class="whole-radio-container">
                <h4>Occupation</h4>
                <div class="radio-buttons-container">
                  <div class="radio">
                    <input
                      type="radio"
                      id="student"
                      name="Occupation"
                      value="student"
                      v-model="personalInformation.occupation"
                    />
                    <label for="student">Student</label>
                  </div>
                  <div class="radio">
                    <input
                      type="radio"
                      id="workingProfessional"
                      name="Occupation"
                      value="workingProfessional"
                      v-model="personalInformation.occupation"
                    />
                    <label for="workingProfessional"
                      >Working Professional</label
                    >
                  </div>
                  <div class="radio">
                    <input
                      type="radio"
                      id="otherOccupation"
                      name="Occupation"
                      value="other"
                      v-model="personalInformation.occupation"
                    />
                    <label for="otherOccupation">Other</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="myfix">
            <div class="nameDataContainer">
              <button class="Button-Save-Changes">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import "../../assets/stylesheets/dashbordStyle.css";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tempPhoto: [],
      personalInformation: {
        photo: "https://www.w3schools.com/howto/img_avatar.png",
        dob: "",
        gender: "",
        residence: "",
        nationality: "",
        occupation: "",
      },
    };
  },
  methods: {
    uploadImage(e) {
      ////////////
      this.tempPhoto = e.target.files;
      var previewImage = null;
      // const photo = e.target.files[0];
      const image = e.target.files;
      const reader = new FileReader();

      reader.readAsDataURL(image[0]);
      reader.onload = (e) => {
        previewImage = e.target.result;
        console.log("check");
        console.log(previewImage);
        this.personalInformation.photo = previewImage;
      };

      // image.array.forEach((file) => {
      // console.log("First check");
      // this.personalInformation.photo = file;
      // reader.readAsDataURL(file);
      // reader.onload = (e) => {
      //   previewImage = e.target.result;
      //   console.log("check");
      //   console.log(previewImage);
      //   this.personalInformation.photo = previewImage;
      //   console.log(this.personalInformation.photo);
      // };
      // });
    },
    profile() {
      this.$router.push("/dashboard/profile");
    },
    listing() {
      this.$router.push("/dashboard/listing");
    },
    booking() {
      this.$router.push("/dashboard/booking");
    },
    inbox() {
      this.$router.push("/dashboard/inbox");
    },
    async saveUserInfo() {
      try {
        const file = this.tempPhoto;
        const data = new FormData();
        // data.append("userId", this.getCurrentUser.id);
        data.append("photo", file);
        // data.append("dob", this.personalInformation.dob);
        // data.append("gender", this.personalInformation.gender);
        // data.append("city", this.personalInformation.residence);
        // data.append("nationality", this.personalInformation.nationality);
        // data.append("occupation", this.personalInformation.occupation);

        const response = await this.axios.post(
          "http://localhost:3000/api/test/photo/" + this.getCurrentUser.id,
          data
        );
        if (response.data.success === true) {
          console.log("success");
          console.log("success");
          console.log("success");
          console.log("success");
          // this.$store.dispatch("setCurrentUser", {
          //   fName: response.data.user.fName,
          //   lName: response.data.user.lName,
          //   id: response.data.user._id,
          //   token: response.data.token,
          // });
          // this.$router.push("/");
          // this.$store.dispatch("setUserImage", {
          //   image: this.personalInformation.image,
          // });
        }

        // console.log(response.data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
  computed: {
    ...mapGetters(["getCurrentUser", "getUserImage"]),
  },
  created() {
    if (this.getCurrentUser.active === false) {
      this.$router.push("/");
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
.userName {
  color: white !important;
}
.headerStyle {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.Button-Save-Changes {
  margin-bottom: 30px;
}
.whole-radio-container {
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
}
.radio-buttons-container {
  margin: 5px;
  display: flex;
  font-family: "Roboto", sans-serif;
}
.radio {
  margin-right: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}
.radio label {
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
}

.myfix {
  margin: 20px 10px 10px 20px;
}
.profile-Container {
  padding-top: 30px;
  margin: 10px;
  font-family: "Roboto", sans-serif;
}
.uploadImageContainer {
  display: flex;
  font-family: "Roboto", sans-serif;
}
.upload_image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
}
.upload_image_button {
  padding: 40px 20px 20px 40px;
  font-family: "Roboto", sans-serif;
}
.nameDataContainer {
  display: flex;
  padding: 20px 20px 20px 0px;
  font-family: "Roboto", sans-serif;
}

input[type="text"] {
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-color: #fff;
  border: none;
  border-bottom: 2px solid #2c3e50;
  font-family: "Roboto", sans-serif;
}
h4 {
  color: grey;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
}
.namedata {
  padding: 20px 20px 20px 0px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
}
.nameInput {
  font-size: 20px;
  font-family: "Roboto", sans-serif;
}
.wrap-listing {
  width: 300px;
  font-family: "Roboto", sans-serif;
}
/*////////////////////////////////////////////////////////////////////////////////////////*/
</style>
