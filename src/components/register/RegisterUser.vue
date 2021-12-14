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
              <form @submit.prevent="">
                <div class="wrap-login firstname">
                  <label>First name</label>
                  <input
                    type="text"
                    class="first-name"
                    name="firstname"
                    v-model="newUser.fName"
                  />
                </div>
                <div class="wrap-login lastname">
                  <label>Last name</label>
                  <input
                    type="text"
                    class="last-name"
                    name="lastname"
                    v-model="newUser.lName"
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
                <div class="wrap-login email-exist">
                  <h4 v-if="emailExist">{{ emailExist }}</h4>
                </div>
                <div class="btn-more">
                  <button class="buttonU" @click="registerNewUser">
                    Register
                  </button>
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
      emailExist: null,
      newUser: {
        id: "",
        fName: "",
        lName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registerNewUser() {
      try {
        const data = {
          fName: this.newUser.fName,
          lName: this.newUser.lName,
          email: this.newUser.email,
          password: this.newUser.password,
        };
        const response = await this.axios.post(
          "http://localhost:3000/api/auth/signup",
          data
        );
        if (response.data.success === true) {
          this.$router.push("/login");
        }

        // console.log(response.data.message);
      } catch (error) {
        this.emailExist = error.response.data.message;
        console.log(error.response.data.message);
      }
    },
  },
};
</script>
<style scoped>
.email-exist {
  padding-top: 20px;
}
.email-exist h4 {
  color: rgb(218, 6, 6);
  background-color: rgb(232, 240, 254);
  border: 1px solid #2c3e50;
  border-radius: 5px;
  font-weight: 600 !important;
  text-align: center;
}
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
