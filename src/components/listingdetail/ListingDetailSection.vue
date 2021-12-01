<template>
  <section>
    <div class="imageContainer">
      <i class="ti-arrow-circle-left" id="prvButton" @click="previousImage"></i>
      <i class="ti-arrow-circle-right" id="nextButton" @click="nextImage"></i>
      <div>
        <img class="mySlides" :src="currentImage" />
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
              <a href="#" title="">{{ listingData.address }}</a>
            </div>
            <!-- /.box-title -->
            <ul class="box-address">
              <li class="address myfix">
                <font-awesome-icon
                  class="header-icons"
                  icon="map-marker-alt"
                ></font-awesome-icon>
                <p class="icon-label">{{ listingData.address }}</p>
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
                <a href="#" title="">Write A Review</a>
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
            <h3 class="comment-title">
              {{ listingData.reviews.length }} Reviews
            </h3>
            <ol>
              <review-section
                v-for="review in listingData.reviews"
                :key="review.email"
                :author="review.author"
                :authorImage="review.authorImage"
                :ratting="review.ratting"
                :authorReview="review.review"
                :title="review.title"
              ></review-section>
            </ol>
            <!-- /.comment-list -->
            <hr />
            <div class="comment-respond">
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
                <div class="comment-form-email">
                  <label for="comment-email">Your Email</label>
                  <input
                    type="email"
                    id="comment-email"
                    name="email"
                    v-model="reviewData.email"
                  />
                </div>
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
                  <button type="submit">Submit Your Review</button>
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
              <div
                class="flat-maps"
                data-address="Ngõ 178 Nguyễn Lương Bằng, Chợ Dừa, Đống Đa, Hà Nội, Việt Nam"
                data-image="images/icon/map.png"
                data-name="Themesflat Map"
              ></div>
              <div class="gm-map">
                <div class="map-4"></div>
              </div>
            </div>
            <!-- /#flat-map -->
            <div class="box contact-box">
              <ul class="contact-list">
                <li class="address myfix">
                  <font-awesome-icon
                    class="header-icons"
                    icon="map-marker-alt"
                  ></font-awesome-icon>
                  <p class="icon-label">{{ listingData.address }}</p>
                </li>
                <li class="phone myfix">
                  <font-awesome-icon
                    class="header-icons"
                    icon="phone-alt"
                  ></font-awesome-icon>
                  <p class="icon-label">{{ listingData.phone }}</p>
                </li>
              </ul>
            </div>
            <div class="box open">
              <p><i class="fa fa-clock-o" aria-hidden="true"></i>Open Hour:</p>
              <div class="box-desc">
                <p>Mon - Sunday</p>
                <p>09:00 AM - 05:00 PM<span>Closed Now !</span></p>
              </div>
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
export default {
  components: {
    ReviewSection,
  },
  data() {
    return {
      listingData: {
        id: 1,
        kind: "default",
        type: "default",
        address: "New York 123",
        phone: "00 123 456 789",
        rentalPeriod: "default",
        availableFrom: "",
        price: "1300",
        currency: "PKR ",
        description:
          "This is a nice studio apartment with one bathroom for rent. It has a simple decor that makes it a functional and comfortable space. It receives natural light from a large set of windows. The living room has a single bed, a desk and a dining area with TV. The kitchen comes fully equipped with all of your cooking needs, plus a microwave, refrigerator, and stove. The bathroom is large. The building's common areas include a lounge, community kitchen, and a laundry room with washers and dryers. You'll also enjoy the courtyard.",
        bed: "No Bed",
        wifi: "WiFi",
        washingMachine: "No Washing Machine",
        dryer: "Dryer",
        tv: "TV",
        airConditioner: "No AC",
        balcony: "No Balcony",
        garden: "Garden",
        pets: "No Pets Allowed",
        parking: "Parking",
        basement: "No Basement",
        furnished: "Furnished",
        images: [
          "https://housinganywhere.imgix.net/room/1666164/1cbe6586-3e60-4748-ab99-58664ed0eb49.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
          "https://housinganywhere.imgix.net/room/1666164/2c7b7d12-4352-4220-b79f-46f27da8e820.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
          "https://housinganywhere.imgix.net/room/1666164/054fcb30-d188-4b1f-a01b-8eb953736425.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
          "https://housinganywhere.imgix.net/room/1666164/c160ccda-c41b-47ea-b77a-d5a993e4fce3.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
        ],
        reviews: [
          {
            author: "Usama Ilyas",
            authorImage: "https://www.w3schools.com/howto/img_avatar.png",
            email: "1",
            title: "The food was amazing",
            review:
              "Such a lovely place. The host met us at agreed time, showed us everything. The apartment is conveniently located, a short walk to subway, shops, and restaurants. Wi fi worked well. We had a great time.",
            ratting: "4",
          },
          {
            author: "Usama Ilyas",
            authorImage: "https://www.w3schools.com/howto/img_avatar.png",
            email: "2",
            title: "The food was amazing",
            review:
              "Such a lovely place. The host met us at agreed time, showed us everything. The apartment is conveniently located, a short walk to subway, shops, and restaurants. Wi fi worked well. We had a great time.",
            ratting: "4",
          },
        ],
      },
      reviewData: {
        author: "Usama Ilyas",
        authorImage: "https://www.w3schools.com/howto/img_avatar.png",
        email: "",
        title: "",
        review: "",
        rating: "",
      },
      index: 0,
      currentImage:
        "https://housinganywhere.imgix.net/room/1666164/1cbe6586-3e60-4748-ab99-58664ed0eb49.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446",
    };
  },
  methods: {
    nextImage() {
      if (this.index === this.listingData.images.length - 1) {
        this.index = -1;
      }
      this.index += 1;
      this.currentImage = this.listingData.images[this.index];
    },
    previousImage() {
      if (this.index === 0) {
        this.index = this.listingData.images.length;
      }
      this.index -= 1;
      this.currentImage = this.listingData.images[this.index];
    },
    submitReview() {
      this.listingData.reviews.push(this.reviewData);
      console.log(this.reviewData);
    },
  },
};
</script>

<style scoped>
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
  font-size: 48px;
  font-weight: 500;
  line-height: 72px;
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
</style>
