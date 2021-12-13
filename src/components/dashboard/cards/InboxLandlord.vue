<template>
  <div class="row">
    <div class="imagebox style2">
      <div class="box-imagebox">
        <div class="myfix">
          <div class="profile_info">
            <div class="imageSection">
              <img
                src="https://housinganywhere.imgix.net/room/1666164/c160ccda-c41b-47ea-b77a-d5a993e4fce3.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446"
                class="profile_image"
                alt=""
              />
              <h4 class="userName">Kaleem Ullah</h4>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-content">
            <div class="box-title">
              <a href="#" title="" class="addressName"
                >{{ bookingDetails.listing.streetAddress }} </a
              ><i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <ul class="rating">
              <li>
                <p>22/12/2021</p>
              </li>
            </ul>
            <div class="box-desc">
              <p>
                {{ bookingDetails.tenant.fName }} wants to book your property
              </p>
              <p>Message: {{ bookingDetails.description }}</p>
            </div>
            <ul class="location">
              <li class="address">
                <span class="ti-location-pin"></span
                >{{ bookingDetails.listing.city }},
                {{ bookingDetails.listing.country }}
              </li>
            </ul>
            <div class="button-Container" v-if="bookingStatus === 'pending'">
              <button @click="updateStatus('accepted')">Accept</button>
              <button @click="updateStatus('declined')">Decline</button>
            </div>
          </div>
        </div>
        <!-- /.box-content -->
      </div>
      <!-- /.box-imagebox -->
    </div>
    <!-- /.imagebox style2 -->

    <!-- /.col-sm-12 -->
  </div>
  <!-- /.row -->
</template>

<script>
export default {
  props: ["bookingDetails"],
  data() {
    return { bookingStatus: this.bookingDetails.status };
  },
  methods: {
    async updateStatus(st) {
      try {
        const response = await this.axios.put(
          "http://localhost:3000/api//booking/update/status/" +
            this.bookingDetails._id,
          { status: st }
        );
        if (response.data.success) {
          this.bookingStatus = st;
          console.log("SUCSESSSSSSSSSSSSS");
        }
        // console.log(response.data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
};
</script>
<style scoped>
.imagebox.style2 .box-content {
  float: unset;
  padding: 29px 30px 0 30px;
  width: calc(100% - 200px);
}

.button-Container {
  margin-bottom: 20px;
  float: right;
}
.button-Container button {
  margin-right: 20px;
}
.myfix {
  display: flex;
}
.profile_info {
  padding: 30px;
  padding-left: 40px;
}
.userName {
  text-align: center;
  padding-top: 10px;
  font-weight: 600;
}
.profile_image {
  width: 130px;
  height: 130px;
  border-radius: 100%;
}
.price {
  color: #4ca1af;
  font-weight: 600;
  font-size: 20px;
}
.addressName {
  font-weight: 700;
  font-size: 25px;
  padding-bottom: 15px;
}
.city {
  font-weight: 350;
  font-size: 17px;
  display: flex;
}
.remove {
  text-align: right;
  color: #4ca1af;
  font-weight: 400;
}
</style>
