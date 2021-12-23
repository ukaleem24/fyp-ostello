<template>
  <div class="col-md-4">
    <div class="imagebox style1">
      <div class="box-imagebox">
        <div class="box-header">
          <div class="box-image">
            <img :src="listingPhotos[0]" alt="" />
            <div class="overlay"></div>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-content">
          <div class="box-title">
            <a href="#" title=""
              >{{ listing.currency.toUpperCase() }}{{ listing.price }}/Month</a
            ><i class="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <ul class="rating">
            <li>{{ listing.streetAddress }}</li>
            <li>{{ listing.type }}</li>
          </ul>
        </div>
        <!-- /.box-content -->
        <ul class="location">
          <li class="address">
            <span class="ti-location-pin"></span>{{ listing.city }},
            {{ listing.country }}
          </li>
          <li class="open">Booking Completed</li>
        </ul>
        <!-- /.location -->
      </div>
      <!-- /.box-imagebox -->
    </div>
    <!-- /.imaegbox style1 -->
  </div>
</template>

<script>
export default {
  props: ["listing"],
  data() {
    return {
      listingPhotos: [],
      tempPhoto: null,
    };
  },
  async created() {
    //getting images of a listing to display on card
    try {
      const roomId = this.listing._id;
      const photoResponse = await this.axios.get(
        "http://localhost:3000/api/get/photos/" + roomId
      );
      // imageName = userInfoResponse.data.userinfo.photo;
      // this.photoResponse = imageName[0];
      this.listingPhotos = photoResponse.data.photos;
      this.tempPhoto = this.listingPhotos[0].photo;
      this.listingPhotos[0] = "http://localhost:3000/" + this.tempPhoto[0];
      console.log(this.listingPhotos[0]);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      this.togglePreloader = false;
    }
  },
};
</script>
