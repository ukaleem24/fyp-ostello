<template>
  <div class="row">
    <div class="col-sm-12">
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
                <h4 class="userName">{{ bookingDetails.landlord.fName }}</h4>
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
                  <p>Requested move-in date: {{ bookingDetails.moveIn }}</p>
                </li>
              </ul>
              <div v-if="bookingStatus === 'accepted'">
                <div class="box-desc">
                  <p>
                    {{ bookingDetails.landlord.fName }} {{ bookingStatus }} your
                    request to rent this property
                  </p>
                </div>

                <div v-if="paymentStatus === 'pending'">
                  <p>Please make the payment to complete booking process!</p>
                  <router-link to="/payment">Pay now</router-link>
                </div>
              </div>
              <div v-else>
                <p>Your request to rent this property is pending approval!</p>
              </div>
              <ul class="location">
                <li class="address">
                  <span class="ti-location-pin"></span
                  >{{ bookingDetails.listing.city }},
                  {{ bookingDetails.listing.country }}
                </li>
              </ul>
            </div>
          </div>
          <!-- /.box-content -->
        </div>
        <!-- /.box-imagebox -->
      </div>
      <!-- /.imagebox style2 -->
    </div>
    <!-- /.col-sm-12 -->
  </div>
  <!-- /.row -->
</template>

<script>
export default {
  props: ["bookingDetails"],
  data() {
    return {
      bookingStatus: this.bookingDetails.status,
      paymentStatus: this.bookingDetails.paymentStatus,
    };
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
.myfix {
  display: flex;
}
.profile_info {
  padding: 20px;
  padding-left: 40px;
}
.userName {
  text-align: center;
  padding-top: 10px;
  font-weight: 600;
}
.imagebox.style2 .box-content {
  float: unset;
  padding: 29px 30px 0 30px;
  width: calc(100% - 250px);
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
