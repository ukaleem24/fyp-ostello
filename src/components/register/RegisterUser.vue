<template>
  <section class="flat-row flat-login style2 parallax1">
    <div class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <!-- /.col-lg-2 -->
        <div class="box">
          <div class="register-form">
            <div class="login-form style2">
              <h3>Register</h3>
              <form
                action="#"
                method="get"
                accept-charset="utf-8"
                @submit.prevent="registerNewUser"
              >
                <div class="wrap-login firstname">
                  <label>First name</label>
                  <input
                    type="text"
                    class="first-name"
                    name="firstname"
                    v-model="newUser.firstName"
                  />
                </div>
                <div class="wrap-login lastname">
                  <label>Last name</label>
                  <input
                    type="text"
                    class="last-name"
                    name="lastname"
                    v-model="newUser.lastName"
                  />
                </div>
                <div class="wrap-login">
                  <label>Email address *</label>
                  <input
                    type="text"
                    class="username"
                    name="username"
                    v-model="newUser.email"
                  />
                </div>
                <div class="wrap-login">
                  <label>Password *</label>
                  <input
                    type="password"
                    class="password"
                    name="password"
                    v-model="newUser.password"
                  />
                </div>
                <div class="btn-more">
                  <button class="buttonU">Register</button>
                </div>
              </form>
              <!-- /form -->
            </div>
            <!-- /.login-form style2 -->
          </div>
          <!-- /.col-lg-4 col-sm-6 -->
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="overlay"></div>
  </section>
  <!-- /.flat-login style2 -->
</template>
<script>
export default {
  data() {
    return {
      newUser: {
        id: Date.now() + Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        fName: "",
        lName: "",
        email: "",
        password: "",
        isLandlord: "false",
        persolnalInfo: [],
      },
    };
  },
  methods: {
    registerNewUser() {
      this.axios
        .post(
          "http://localhoast:3000/auth/signup",
          this.fName,
          this.lName,
          this.email,
          this.password
        )
        .then((result) => {
          console.warn(result);
        });
      this.$store.dispatch("addNewUser", this.newUser);
    },
  },
};
</script>
<style scoped>
.login-form {
  padding: 1px 0 !important;
}
.box {
  width: 500px;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin-left: 150px;
}
.buttonU {
  border-radius: 30px;
  padding: 1px 42px 16px;
  font-size: 16px;
  font-weight: 400;
}
.buttonU:hover {
  background-color: #2c3e50;
  color: white;
}
</style>
