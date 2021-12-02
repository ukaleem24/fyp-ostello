<template>
  <the-header class="headerStyle"></the-header>
  <!--header area end-->
  <!--mobile navigation bar start-->
  <!--mobile navigation bar end-->
  <!--sidebar start-->
  <div class="wholeBody">
    <div class="sidebar">
      <div class="profile_info">
        <img
          src="../../assets/images/dummy/dummy.jpg"
          class="profile_image"
          alt=""
        />
        <h4 class="userName">Jessica</h4>
      </div>

      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="user"></font-awesome-icon>
          <h5 class="myFixlabelIcon">Profile</h5>
        </div>
      </div>

      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="user"></font-awesome-icon>
          <h5 class="myFixlabelIcon">Profile</h5>
        </div>
      </div>
      <div class="icon-container">
        <div class="icon-label">
          <font-awesome-icon icon="user"></font-awesome-icon>
          <h5 class="myFixlabelIcon">Profile</h5>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="profile-Container">
        <h3>Personal information</h3>
        <div class="myfix">
          <div class="uploadImageContainer">
            <img
              src="../../assets/images/dummy/dummy.jpg"
              class="upload_image"
              alt=""
            />
            <input class="upload_image_button" type="file" name="upload-file" />
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
                placeholder="Usama"
                class="nameInput"
              />
            </div>
            <div class="namedata">
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
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
              <input type="date" name="rent" id="rent" />
            </div>
          </div>
        </div>
        <div class="myfix">
          <div class="nameDataContainer">
            <div class="whole-radio-container">
              <h4>Gender</h4>
              <div class="radio-buttons-container">
                <div class="radio">
                  <input type="radio" id="male" name="Gender" value="male" />
                  <label for="male">Male</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    id="female"
                    name="Gender"
                    value="female"
                  />
                  <label for="female">Female</label>
                </div>
                <div class="radio">
                  <input type="radio" id="other" name="Gender" value="other" />
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
              <input type="text" id="city" name="city" />
            </div>
            <div class="namedata">
              <label for="Nationalilty">Nationalilty</label>
              <input type="text" id="Nationalilty" name="Nationalilty" />
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
                  />
                  <label for="student">Student</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    id="workingProfessional"
                    name="Occupation"
                    value="workingProfessional"
                  />
                  <label for="workingProfessional">Working Professional</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    id="otherOccupation"
                    name="Occupation"
                    value="other"
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
  </div>
</template>

<script>
import "../../assets/stylesheets/dashbordStyle.css";
export default {};
</script>
<style scoped>
.sidebar .icon-container {
  color: #fff;
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
  font-size: 20px;
  font-weight: 500;
  display: flex;
}
.sidebar .icon-container:hover {
  background: #2c3e50;
  color: white;
}
.sidebar .myFixlabelIcon {
  padding-left: 10px;
  font-weight: 500;
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
