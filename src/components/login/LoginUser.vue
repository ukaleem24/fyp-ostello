<template>
  <section class="flat-row flat-login style2 parallax1">
    <div class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <!-- /.col-lg-2 -->
        <div class="box">
          <div class="register-form">
            <div class="login-form style2">
              <h3>Hi, Welcome Back</h3>
              <form @submit.prevent="">
                <div class="wrap-login">
                  <label>Email address *</label>
                  <input
                    type="text"
                    class="username"
                    name="username"
                    v-model="user.email"
                  />
                </div>
                <div class="wrap-login">
                  <label>Password *</label>
                  <input
                    type="password"
                    class="password"
                    name="password"
                    v-model="user.password"
                  />
                </div>
                <div class="wrap-login email-exist">
                  <h4 v-if="message">{{ message }}</h4>
                </div>
                <div class="btn-more">
                  <button class="buttonU" @click="login">Login</button>
                  <button class="buttonU" @click="getProfile">Login</button>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      message: null,
      emailExist: null,
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser", "getToken"]),
  },
  methods: {
    async login() {
      try {
        const data = {
          email: this.user.email,
          password: this.user.password,
        };
        const response = await this.axios.post(
          "http://localhost:3000/api/auth/login",
          data
        );
        if (response.data.success === true) {
          this.$store.dispatch("setCurrentUser", {
            fName: response.data.user.fName,
            lName: response.data.user.lName,
            email: response.data.user.email,
            id: response.data.user._id,
            active: true,
          });
          this.$router.push("/");
          // this.$router.push("/");
        }

        // console.log(response.data.message);
      } catch (error) {
        this.message = error.response.data.message;
        console.log(error.response.data.message);
      }
    },
    // async getProfile() {
    //   try {
    //     const response = await this.axios.get(
    //       "https://localhost:3000/api/auth/user"
    //     );
    //     console.log(response.data.user);
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // },
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
