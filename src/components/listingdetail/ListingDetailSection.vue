<template>
  <loading-animation v-if="togglePreloader"></loading-animation>

  <section>
    <div class="imageContainer">
      <i class="ti-arrow-circle-left" id="prvButton" @click="previousImage"></i>
      <i class="ti-arrow-circle-right" id="nextButton" @click="nextImage"></i>
      <div>
        <img class="mySlides image-fix" :src="currentImage" />
      </div>
    </div>
  </section>

  <section class="flat-title">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="title-left">
            <!-- /.queue -->
            <div class="title">
              <a href="#" title="">{{ listingData.streetAddress }}</a>
            </div>
            <!-- /.box-title -->
            <ul class="box-address">
              <li class="address myfix">
                <font-awesome-icon
                  class="header-icons"
                  icon="map-marker-alt"
                ></font-awesome-icon>
                <p class="icon-label">{{ listingData.location }}</p>
              </li>
              <li class="phone myfix">
                <font-awesome-icon
                  class="header-icons"
                  icon="phone-alt"
                ></font-awesome-icon>
                <p class="icon-label">{{ listingData.phone }}</p>
              </li>
            </ul>
            <!-- /.box-address -->
          </div>
          <!-- /.title-left -->
        </div>
        <!-- /.col-md-8 -->
        <div class="col-md-4">
          <div class="title-right">
            <div class="ButtonDisplay-myfix">
              <div class="btn-more review">
                <a href="#review-section" title="">Write A Review</a>
              </div>
              <div class="btn-more">
                <a href="#" title="">Book Now</a>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- /.title-right -->
        </div>
        <!-- /.col-md-4 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.flat-title -->

  <section class="flat-row flat-explore-detail">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-box">
            <h3>About this listing</h3>
            <div class="text-desc">
              <p>
                {{ listingData.description }}
              </p>
            </div>
          </div>
          <div class="amenities">
            <h3>Amenities</h3>
            <ul class="quater">
              <li class="myfix amenities-myfix">
                <font-awesome-icon
                  class="icons"
                  icon="wifi"
                ></font-awesome-icon>
                <p class="icon-label">{{ listingData.wifi }}</p>
              </li>
              <li class="myfix amenities-myfix">
                <font-awesome-icon class="icons" icon="bed"></font-awesome-icon>
                <p class="icon-label">
                  {{ listingData.bed }}
                </p>
              </li>
            </ul>
            <ul class="quater">
              <li class="myfix amenities-myfix">
                <font-awesome-icon class="icons" icon="tv"></font-awesome-icon>
                <p class="icon-label">
                  {{ listingData.tv }}
                </p>
              </li>
              <li class="myfix amenities-myfix">
                <font-awesome-icon
                  class="icons"
                  icon="couch"
                ></font-awesome-icon>
                <p class="icon-label">
                  {{ listingData.furnished }}
                </p>
              </li>
            </ul>
            <ul class="quater">
              <li class="myfix amenities-myfix">
                <font-awesome-icon
                  class="icons"
                  icon="parking"
                ></font-awesome-icon>
                <p class="icon-label">
                  {{ listingData.parking }}
                </p>
              </li>
              <li class="myfix amenities-myfix">
                <font-awesome-icon
                  class="icons"
                  icon="wind"
                ></font-awesome-icon>
                <p class="icon-label">
                  {{ listingData.airConditioner }}
                </p>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="comment-area">
            <h3 class="comment-title" id="showing-reviews">
              {{ allReviews.length }} Reviews
            </h3>
            <ol>
              <review-section
                v-for="review in finalReviews"
                :key="review._id"
                :author="review.user"
                :photo="review.photo"
                :rating="review.rating"
                :authorReview="review.review"
                :title="review.title"
              ></review-section>
            </ol>
            <!-- /.comment-list -->
            <hr />
            <div class="comment-respond" id="review-section">
              <h2 class="comment-reply-title">Leave a Review</h2>
              <div class="comment-vote">
                <vue3-star-ratings
                  v-model="reviewData.rating"
                  :showControl="false"
                />
              </div>
              <form
                action="#"
                class="comment-form"
                method="get"
                accept-charset="utf-8"
                @submit.prevent="submitReview"
              >
                <div class="comment-form-title">
                  <label for="comment-title">Title</label>
                  <input
                    type="text"
                    id="comment-title"
                    name="comment-title"
                    v-model="reviewData.title"
                  />
                </div>
                <div class="clearfix"></div>
                <div class="comment-form-comment">
                  <label for="comment-comment">Review</label>
                  <textarea
                    id="comment-comment"
                    name="comment"
                    v-model="reviewData.review"
                  ></textarea>
                  <p>
                    Your review recommended to be at least 140 characters long
                  </p>
                </div>
                <div class="submit-form">
                  <p v-if="disableLoginFeatures">
                    Please Login to submit a review!
                  </p>
                  <button
                    type="submit"
                    id="submitReview"
                    :disabled="disableLoginFeatures"
                  >
                    Submit Your Review
                  </button>
                </div>
              </form>
              <!-- /.comment-form -->
            </div>
            <!-- /.comment-respond -->
          </div>
          <!-- /.comment-area -->
        </div>
        <!-- /.col-md-8 -->
        <div class="col-md-4">
          <div class="sidebar">
            <div class="box pdmap style1" id="flat-map-4">
              <GMapMap
                class="myMapFix"
                :center="{ lat: 33.6844, lng: 73.0479 }"
                :zoom="10"
              />
              <!-- <div class="gm-map">
                <div class="map-4"></div>
              </div> -->
            </div>
            <!-- /#flat-map -->
            <div class="box contact-box" id="booking-section">
              <div class="profile_info">
                <img
                  v-if="gotLandlordProfileImage === false"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  class="profile_image1"
                  alt=""
                />
                <img
                  v-if="gotLandlordProfileImage === true"
                  :src="'http://localhost:3000/' + landlordProfileImage"
                  class="profile_image1"
                  alt=""
                />
              </div>

              <h4 class="ownerName">{{ landlord.fName }}</h4>
              <h4 class="rent">RENTAL PERIOD</h4>
              <form @submit.prevent="submitBooking">
                <div>
                  <div>
                    <label for="moveIn">Move-in date</label>
                    <input
                      type="date"
                      name="moveIn"
                      class="date_input"
                      v-model="moveInDate"
                      required
                    />
                  </div>
                  <div>
                    <label for="moveOut">Introduce Yourself</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      v-model="description"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="booking-button-container">
                  <button
                    class="booking-button"
                    type="submit"
                    :disabled="disableLoginFeatures"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /.col-md-4 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.flat-explore-detail <-->

  <section class="flat-row flat-subscribe">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <div class="subscribe-text">
            Subscribe and be notified about new locations
          </div>
        </div>
        <!-- /.col-sm-7 -->
        <div class="col-sm-5">
          <div class="subscribe-form">
            <form action="#" method="get" accept-charset="utf-8">
              <div class="subscribe-content">
                <div class="input-field">
                  <input
                    type="email"
                    name="yourEmail"
                    placeholder="Your Email"
                  />
                </div>
                <button><span class="arrow_right"></span></button>
              </div>
            </form>
          </div>
          <!-- /.subscribe-form -->
        </div>
        <!-- /.col-sm-5 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.flat-subscibe -->

  <div class="button-go-top">
    <a href="#" title="" class="go-top"> <i class="fa fa-chevron-up"></i> </a
    ><!-- /.go-top -->
  </div>
  <!-- /.button-go-top -->
</template>

<script>
import ReviewSection from "./ReviewsSection.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ReviewSection,
  },
  data() {
    return {
      gotLandlordProfileImage: false,
      landlordProfileImage: "",
      tempPhoto: [],
      listingPhotos: [],
      landlord: {},
      allReviews: [],
      listingData: [],
      reviewData: {
        author: "",
        email: "",
        title: "",
        review: "",
        rating: "",
      },
      index: 0,
      currentImage: this.$store.getters.getListings[0].images[0].image,
      disableLoginFeatures: true,
      moveInDate: "",
      description: "",
      reviewImages: [],
      finalReviews: [],
      togglePreloader: true,
    };
  },
  computed: {
    ...mapGetters(["getListings", "getCurrentUser"]),
  },
  methods: {
    nextImage() {
      if (this.index === this.listingPhotos.length - 1) {
        this.index = 0;
      } else ++this.index;
      this.currentImage = this.listingPhotos[this.index];
    },
    previousImage() {
      if (this.index === 0) {
        this.index = this.listingPhotos.length;
      }
      this.index -= 1;
      this.currentImage = this.listingPhotos[this.index];
    },
    async submitReview() {
      let submitReviw = false;
      try {
        const data = {
          user: this.getCurrentUser.id,
          listing: this.$route.params.roomId,
          title: this.reviewData.title,
          review: this.reviewData.review,
          rating: this.reviewData.rating,
        };
        const response = await this.axios.post(
          "http://localhost:3000/api/listingdetail/review",
          data
        );
        if (response.data.success === true) {
          submitReviw = true;
        }
        console.log(this.allReviews);

        // console.log(response.data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
      if (submitReviw === true) {
        let tempReviewImage = null;
        try {
          const userId = this.getCurrentUser.id;
          let imageName = null;
          //getting reviews
          const userInfoResponse = await this.axios.get(
            "http://localhost:3000/api/user/info/" + userId
          );
          imageName = userInfoResponse.data.userinfo.photo;
          tempReviewImage = imageName[0];
        } catch (error) {
          tempReviewImage = null;
        }
        let tempuser = {
          fName: this.getCurrentUser.fName,
          lName: this.getCurrentUser.lName,
        };
        let data = {
          user: tempuser,
          photo: tempReviewImage,
          rating: this.reviewData.rating,
          review: this.reviewData.review,
          title: this.reviewData.title,
        };
        this.finalReviews.push(data);
      }
    },
    async submitBooking() {
      try {
        console.log("booking form triggered");
        const data = {
          landlordId: this.landlord,
          tenantId: this.getCurrentUser.id,
          listingId: this.$route.params.roomId,
          moveIn: this.moveInDate,
          description: this.description,
          status: "pending",
          payment: "pending",
        };
        const response = await this.axios.post(
          "http://localhost:3000/api//new/booking",
          data
        );
        if (response.data.success) {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    //
    // this.listingData.reviews.push(this.reviewData);
    // console.log(this.reviewData);
  },

  async created() {
    try {
      try {
        const roomId = this.$route.params.roomId;
        const photoResponse = await this.axios.get(
          "http://localhost:3000/api/get/photos/" + roomId
        );
        // imageName = userInfoResponse.data.userinfo.photo;
        // this.photoResponse = imageName[0];
        this.listingPhotos = photoResponse.data.photos;
      } catch (error) {
        console.log(error.response.data.message);
      }
      for (let i = 0; i < this.listingPhotos.length; i++) {
        this.tempPhoto.push(this.listingPhotos[i].photo);
        this.listingPhotos[i] = "http://localhost:3000/" + this.tempPhoto[i];
      }
      this.currentImage = this.listingPhotos[1];

      // console.log(this.$route.params);
      // const roomId = this.$route.params.roomId;
      // this.listingData = this.$store.getters.getListings.find(
      //   (listing) => listing.id == roomId
      // );
      // console.log(this.$store.getters.getListings);
      // console.log;
      //getting specfic listing Detail
      try {
        const roomId = this.$route.params.roomId;
        console.log(roomId);
        const response = await this.axios.get(
          "http://localhost:3000/api/search/specific_listing/" + roomId
        );
        console.log(response.data.searchResults);
        this.listingData = response.data.searchResults[0];
        this.landlord = this.listingData.user;
      } catch (error) {
        console.log(error.response.data.message);
      }

      //Getting reviews
      try {
        const roomId = this.$route.params.roomId;
        const reviewsResponse = await this.axios.get(
          "http://localhost:3000/api/listingdetail/review/" + roomId
        );

        console.log(reviewsResponse.data.reviews);
        this.allReviews = reviewsResponse.data.reviews;
        console.log(this.allReviews);
        if (this.$store.getters.getCurrentUser.active) {
          this.disableLoginFeatures = false;
          console.log("KAJLKFDJSLKDSJFLKDj");
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
      //getting review Images
      if (this.allReviews.length != 0) {
        for (let i = 0; i < this.allReviews.length; i++) {
          try {
            const userId = this.allReviews[i].user._id;
            let imageName = null;
            //getting reviews
            const userInfoResponse = await this.axios.get(
              "http://localhost:3000/api/user/info/" + userId
            );
            imageName = userInfoResponse.data.userinfo.photo;
            this.reviewImages.push(imageName[0]);
          } catch (error) {
            this.reviewImages.push(null);
          }
        }
      }
      if (this.allReviews.length != 0) {
        for (let i = 0; i < this.allReviews.length; i++) {
          let data = {
            user: this.allReviews[i].user,
            photo: this.reviewImages[i],
            rating: this.allReviews[i].rating,
            review: this.allReviews[i].review,
            title: this.allReviews[i].title,
          };
          this.finalReviews.push(data);
        }
      }

      //getting landlord info
      try {
        const userId = this.landlord._id;
        let imageName = null;
        //getting reviews
        const userInfoResponse = await this.axios.get(
          "http://localhost:3000/api/user/info/" + userId
        );
        imageName = userInfoResponse.data.userinfo.photo;
        this.landlordProfileImage = imageName[0];
        this.gotLandlordProfileImage = true;
      } catch (error) {
        console.log(error.response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.togglePreloader = false;
    }
  },
  mounted() {},
};
</script>

<style scoped>
.sidebar {
  margin-left: 20px;
}
.booking-button-container {
  text-align: center !important;
}
.booking-button {
  width: 100%;
  margin-bottom: 20px;
}
.rent {
  font-weight: 700;
  padding-bottom: 10px;
}
.ownerName {
  text-align: center;
  font-weight: 700;
  padding-bottom: 20px;
}

.profile_info {
  justify-content: center !important;
  align-items: center !important;
}
.profile_image1 {
  width: 130px;
  height: 130px;
  border-radius: 100px;
  margin-bottom: 10px;
}
.ButtonDisplay-myfix {
  display: flex;
}
.mySlides {
  height: 95vh;
  width: 100%;
}
#nextButton {
  position: absolute;
  top: 60%;
  z-index: 10;
  right: 5%;
  font-size: 50px;
  color: #2c3e50;
  /* color: #4ca1af; */
  cursor: pointer;
}
#nextButton:hover {
  font-size: 60px;
  font-weight: 600;
  top: 59%;
}
#prvButton:hover {
  font-size: 60px;
  font-weight: 600;
  top: 59%;
}
#prvButton {
  position: absolute;
  top: 60%;
  z-index: 10;
  left: 5%;
  font-size: 50px;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
}
.myfix {
  display: flex;
}
.ti-location-pin {
  font-size: 17px;
}
.ti-mobile {
  font-size: 17px;
}
.title {
  font-size: 36px;
  font-weight: 500;
  line-height: 72px;
  padding-bottom: 5px;
}
.icons {
  font-size: 24px;
  color: #4ca1af;
}
.icon-label {
  padding-left: 15px;
}
.amenities-myfix {
  padding: 0 60px 15px 0;
}
.header-icons {
  font-size: 20px;
  color: #2c3e50;
}
.myMapFix {
  height: 300px;
}

.image-fix {
  max-width: 900px; /* you can use % */
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.comment-respond form .comment-form-title {
  padding-left: unset;
}
</style>
