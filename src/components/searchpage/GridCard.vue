<template>
  <div class="col-md-4">
    <div class="imagebox style1">
      <div class="box-imagebox">
        <div class="box-header">
          <div class="box-image">
            <img :src="listingPhotos[0]" alt="" />
            <a @click="saveListing" href="#" title="">Preview</a>
            <div class="overlay"></div>
          </div>
        </div>

        <!-- /.box-header -->
        <div class="box-content">
          <div class="box-title">
            <a href="#" title="">{{ listing.currency }} {{ listing.price }}</a
            ><i class="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <div class="" v-if="averageRating != 'No'">
            <font-awesome-icon
              class="queue"
              icon="star"
              v-for="rate in averageRating"
              :key="rate"
            ></font-awesome-icon>
            <font-awesome-icon
              class="queuee"
              icon="star"
              v-for="rate in blackRating"
              :key="rate"
            ></font-awesome-icon>
          </div>
          <div class="queuee" v-if="averageRating === 'No'">
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
          </div>
          <ul class="rating">
            <li>{{ averageRating }} rating</li>
            <li>{{ listing.kind }}</li>
            <li>{{ listing.type }}</li>
          </ul>
          <div class="box-desc">
            {{ listing.description }}
          </div>
        </div>
        <!-- /.box-content -->
        <ul class="location">
          <li class="address">
            <span class="ti-location-pin"></span>{{ listing.city }},
            {{ listing.country }}
          </li>
          <li class="open">Open Now !</li>
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
      allReviews: "",
      rating: 0,
      averageRating: 0,
      blackRating: 0,
      tempPhoto: null,
      listingPhotos: [],
    };
  },
  methods: {
    saveListing() {
      // console.log("savelisting");
      // this.$store.dispatch("setSelectedListing", {
      //   selectedListing: this.listing,
      // });
      this.$router.push("/room/" + this.listing._id);
    },
  },
  async beforeCreate() {
    const roomId = this.listing._id;

    //getting reviews
    const reviewsResponse = await this.axios.get(
      "http://localhost:3000/api/listingdetail/review/" + roomId
    );

    this.allReviews = reviewsResponse.data.reviews;
    for (let i = 0; i < this.allReviews.length; i++) {
      this.rating += this.allReviews[i].rating;
    }
    this.averageRating = this.rating / this.allReviews.length;
    if (!isNaN(this.averageRating)) {
      this.averageRating = parseInt(this.averageRating);
    }
    if (isNaN(this.averageRating)) {
      this.averageRating = "No";
    }
    this.blackRating = 5 - this.averageRating;
    console.log(this.blackRating);

    //getting images of a listing to display on card
    try {
      const roomId = this.listing._id;
      const photoResponse = await this.axios.get(
        "http://localhost:3000/api/get/photos/" + roomId
      );
      // imageName = userInfoResponse.data.userinfo.photo;
      // this.photoResponse = imageName[0];
      this.listingPhotos = photoResponse.data.photos;
    } catch (error) {
      console.log(error.response.data.message);
    }
    this.tempPhoto = this.listingPhotos[0].photo;
    this.listingPhotos[0] = "http://localhost:3000/" + this.tempPhoto[0];
  },
};
</script>

<style scoped>
.queue {
  color: #f0b108;
}
</style>
