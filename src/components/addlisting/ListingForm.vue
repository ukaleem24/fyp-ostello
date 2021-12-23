<template>
  <section class="flat-listing">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form
            action="#"
            class="form-listing"
            method="get"
            accept-charset="utf-8"
            @submit.prevent="submitListing"
          >
            <div class="inner-box">
              <p>
                If you don’t have an account you can create one below by
                entering your email address/username.<br />
                Your account details will be confirmed via email.
              </p>
              <div class="btn-more">
                <a href="#" title="">Sign in</a>
              </div>
              <div class="clearfix"></div>
            </div>

            <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
            <!-- Property-section:    -->
            <div class="inner-box form">
              <h3>Property</h3>
              <br />
              <div class="wrap-listing your-email">
                <label>What kind of place are you listing? *</label>
                <div class="wrap-listing price">
                  <span class="ti-angle-down"></span>
                  <select name="kind" id="kind" v-model="listingData.kind">
                    <option value="default">Select Kind</option>
                    <option value="private">Private room</option>
                    <option value="shared">Shared room</option>
                    <option value="entire">Entire place</option>
                  </select>
                </div>
              </div>
              <!-- /.wrap-listing -->
              <div class="wrap-listing your-name">
                <label>What type of property is this? *</label>
                <div class="wrap-listing price">
                  <span class="ti-angle-down"></span>
                  <select name="category" id="type" v-model="listingData.type">
                    <option value="default">Select Type</option>
                    <option value="House">House</option>
                    <option value="Building">Building</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>
              </div>
              <!-- /.wrap-listing -->
              <div class="clearfix"></div>
              <div class="wrap-listing location">
                <label>Street Address*</label>
                <input
                  type="text"
                  placeholder="House#--, Street#--, -----"
                  name="streetAddress"
                  id="streetAddress"
                  v-model="listingData.streetAddress"
                  required
                />
              </div>
              <div class="wrap-listing location">
                <label>Location*</label>
                <span class="ti-target"></span>
                <GMapAutocomplete
                  type="text"
                  placeholder="Location of the property"
                  name="search"
                  id="location"
                  :options="{
                    componentRestrictions: { country: ['pk'] },
                    strictBounds: true,
                  }"
                  @place_changed="setMap"
                  required
                />
              </div>
              <!-- /#flat-map -->
              <div class="wrap-listing phone">
                <label>City</label>
                <input
                  type="text"
                  placeholder="eg. Islamabad"
                  name="city"
                  id="city"
                  v-model="listingData.city"
                  disabled
                />
                <!-- <input
                  type="text"
                  name="phonenumber"
                  placeholder="+92 312 3456789"
                  v-model="listingData.phone"
                /> -->
              </div>
              <!-- /.wrap-listing -->
              <div class="wrap-listing website">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="eg. Pakistan"
                  v-model="listingData.country"
                  disabled
                />
              </div>
              <!-- /.wrap-listing -->

              <!-- /.wrap-listing -->
              <div class="pdmap style2" id="flat-map">
                <div class="flat-maps">
                  <div class="map-3">
                    <GMapMap
                      class="myMapFix"
                      :center="{ lat: position.lat, lng: position.lng }"
                      :zoom="zoom"
                    >
                      <GMapMarker v-if="showMarker" :position="position" />
                    </GMapMap>
                  </div>
                </div>
              </div>
              <!-- /#flat-map -->
              <div class="wrap-listing phone myfix3">
                <label>Phone</label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="+92 312 3456789"
                  v-model="listingData.phone"
                />
              </div>
              <!-- /.wrap-listing -->
              <div class="wrap-listing website myfix3">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="http://"
                  v-model="listingData.website"
                />
              </div>
              <!-- /.wrap-listing -->
              <div class="clearfix"></div>
            </div>

            <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
            <!-- Pricing-section:    -->
            <div class="inner-box form style1 myfix2">
              <h3>Pricing and availability</h3>
              <br />
              <div class="one-half">
                <div class="wrap-listing category">
                  <label>Minimum rental period *</label>
                  <span class="ti-angle-down"></span>
                  <select name="category" v-model="listingData.rentalPeriod">
                    <option value="default">No preference</option>
                    <option value="1">1 Month</option>
                    <option value="2">2 Month</option>
                    <option value="3">3 Month</option>
                    <option value="4">4 Month</option>
                    <option value="5">5 Month</option>
                    <option value="6">6 Month</option>
                    <option value="7">7 Month</option>
                    <option value="8">8 Month</option>
                    <option value="9">9 Month</option>
                    <option value="10">10 Month</option>
                    <option value="11">11 Month</option>
                    <option value="12">12 Month</option>
                  </select>
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price">
                  <label>Available from *</label>
                  <input
                    type="date"
                    name="rent"
                    id="rent"
                    v-model="listingData.availableFrom"
                  />
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price-from">
                  <label>Rent/month*</label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    v-model="listingData.price"
                    required
                  />
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price-to category">
                  <label>Currency</label>
                  <span class="ti-angle-down my-fix"></span>
                  <select name="category" v-model="listingData.currency">
                    <option value="PKR ">PKR</option>
                    <option value="EUR ">EUR</option>
                  </select>
                </div>
                <!-- /.wrap-listing -->
              </div>
              <div class="one-half">
                <label>Description</label>
                <textarea
                  placeholder="Detail description about your listing"
                  v-model="listingData.description"
                ></textarea>
              </div>
              <!-- /.one-half -->
              <div class="clearfix"></div>
            </div>
            <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
            <!-- Amenities-section:    -->
            <div class="inner-box form style1">
              <h3>Amenities</h3>
              <br />
              <div class="one-half">
                <div class="wrap-listing category">
                  <div class="whole-radio-container">
                    <h4>Bed</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noBed"
                          name="bed"
                          value="No Bed"
                          v-model="listingData.bed"
                        />
                        <label for="noBed">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesBed"
                          name="bed"
                          value="Bed"
                          v-model="listingData.bed"
                        />
                        <label for="yesBed">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>WiFi</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noWifi"
                          name="wifi"
                          value="No WiFi"
                          v-model="listingData.wifi"
                        />
                        <label for="noWifi">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesWifi"
                          name="wifi"
                          value="WiFi"
                          v-model="listingData.wifi"
                        />
                        <label for="yesWifi">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>Washing machine</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noWashingMachine"
                          name="washingmachine"
                          value="No Washing machine"
                          v-model="listingData.washingMachine"
                        />
                        <label for="noWashingMachine">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesWashingMachine"
                          name="washingmachine"
                          value="Washing machine"
                          v-model="listingData.washingMachine"
                        />
                        <label for="yesWashingMachine">Yes</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="one-half">
                <div class="wrap-listing category">
                  <div class="whole-radio-container">
                    <h4>Dryer</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="nodryer"
                          name="dryer"
                          value="No Dryer"
                          v-model="listingData.dryer"
                        />
                        <label for="nodryer">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesdryer"
                          name="dryer"
                          value="Dryer"
                          v-model="listingData.dryer"
                        />
                        <label for="yesdryer">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>TV</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="notv"
                          name="tv"
                          value="No TV"
                          v-model="listingData.tv"
                        />
                        <label for="notv">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yestv"
                          name="tv"
                          value="TV"
                          v-model="listingData.tv"
                        />
                        <label for="yestv">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>Air conditioning</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noair"
                          name="airconditioner"
                          value="NO AC"
                          v-model="listingData.airConditioner"
                        />
                        <label for="noair">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesair"
                          name="airconditioner"
                          value="AC"
                          v-model="listingData.airConditioner"
                        />
                        <label for="yesair">Yes</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
            </div>

            <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
            <!-- Facilities-section:    -->
            <div class="inner-box form style1">
              <h3>Facilities</h3>
              <br />
              <div class="one-half">
                <div class="wrap-listing category">
                  <div class="whole-radio-container">
                    <h4>Balcony</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noBalcony"
                          name="balcony"
                          value="No Balcony"
                          v-model="listingData.balcony"
                        />
                        <label for="noBalcony">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesBalcony"
                          name="balcony"
                          value="Balcony"
                          v-model="listingData.balcony"
                        />
                        <label for="yesBalcony">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>Garden</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noGarden"
                          name="garden"
                          value="No Garden"
                          v-model="listingData.garden"
                        />
                        <label for="noGarden">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesGarden"
                          name="garden"
                          value="Garden"
                          v-model="listingData.garden"
                        />
                        <label for="yesGarden">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>Pets allowed</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noPets"
                          name="pets"
                          value="Pets not allowed"
                          v-model="listingData.pets"
                        />
                        <label for="noPets">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesPets"
                          name="pets"
                          value="Pets allowed"
                          v-model="listingData.pets"
                        />
                        <label for="yesPets">Yes</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="one-half">
                <div class="wrap-listing category">
                  <div class="whole-radio-container">
                    <h4>Parking</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noParking"
                          name="parking"
                          value="No Parking"
                          v-model="listingData.parking"
                        />
                        <label for="noParking">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesParking"
                          name="parking"
                          value="Parking"
                          v-model="listingData.parking"
                        />
                        <label for="yesParking">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>Basement</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noBasement"
                          name="basement"
                          value="No Basement"
                          v-model="listingData.basement"
                        />
                        <label for="noBasement">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesBasement"
                          name="basement"
                          value="Basement"
                          v-model="listingData.basement"
                        />
                        <label for="yesBasement">Yes</label>
                      </div>
                    </div>
                  </div>

                  <div class="whole-radio-container">
                    <h4>Furnished</h4>
                    <div class="radio-buttons-container">
                      <div class="radio">
                        <input
                          type="radio"
                          id="noFurnished"
                          name="furnished"
                          value="No Furnished"
                          v-model="listingData.furnished"
                        />
                        <label for="noFurnished">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesFurnished"
                          name="furnished"
                          value="Furnished"
                          v-model="listingData.furnished"
                        />
                        <label for="yesFurnished">Yes</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
            </div>
            <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
            <!-- Media-section:    -->
            <div class="inner-box style3">
              <h3>Media</h3>
              <div class="one-half">
                <div class="media">
                  <label>Your Business Images</label>
                  <div class="browse">
                    <p>Drag & Drop files here</p>
                    <span>or</span>
                    <div class="upload">
                      <span>Browse files</span>
                      <input
                        type="file"
                        name="upload-file"
                        @change="uploadImage"
                      />
                    </div>
                  </div>
                </div>
                <div class="media">
                  <label>Your Business video(Optional)</label>
                  <input
                    type="text"
                    value=""
                    placeholder="ex: https://www.youtube.com/watch?v=XZiki0D_81U"
                  />
                  <button class="submit-form-listing" type="submit">
                    Save & Preview
                  </button>
                </div>
              </div>
              <!-- /.one-half -->
              <div class="one-half">
                <div v-if="images.length > 0" class="media">
                  <label>Images</label>
                  <image-card
                    v-for="singleImage in images"
                    :key="singleImage.id"
                    :image="singleImage.image"
                    :imageName="singleImage.imageName"
                    :id="singleImage.id"
                    @remove-image="removeImage"
                  ></image-card>
                </div>
              </div>
              <!-- /.one-half -->
              <div class="clearfix"></div>
            </div>
            <!-- /.inner-box -->
          </form>
          <!-- /.form-listing -->
        </div>
        <!-- /.col-md-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.flat-listing -->

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
</template>

<script>
import ImageCard from "./ImageCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ImageCard,
  },
  data() {
    return {
      photoFiles: [],
      images: [],
      postResponse: 1,
      listingData: {
        // id: Date.now() + Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        kind: "default",
        type: "default",
        streetAddress: "",
        location: "",
        city: "",
        country: "",
        phone: "",
        rentalPeriod: "default",
        availableFrom: "",
        price: "",
        currency: "PKR ",
        description: "",
        bed: "",
        wifi: "",
        washingMachine: "",
        dryer: "",
        tv: "",
        airConditioner: "",
        balcony: "",
        garden: "",
        pets: "",
        parking: "",
        basement: "",
        furnished: "",
        // images: [],
        // reviews: [],
        booking: {
          isBooked: false,
          bookeedBy: "",
          bookingDate: "",
        },
        position: {},
      },
      position: { lat: 33.6844, lng: 73.0479 },
      zoom: 10,
      showMarker: false,
      userId: null,
      files: null,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    //Submit data to create new listing in database
    async submitListing() {
      try {
        this.listingData.userId = this.getCurrentUser.id;
        const data = this.listingData;

        const response = await this.axios.post(
          "http://localhost:3000/api/add/listing",
          data
        );
        if (response.data.status) {
          this.postResponse = response.data.info._id;
        }
      } catch (error) {
        console.log(error.message);
      }

      //Posting listing images to backend
      for (let i = 0; i < this.photoFiles.length; i++) {
        try {
          let formData = new FormData();
          formData.append("photo", this.photoFiles[i]);
          const response = await this.axios.post(
            "http://localhost:3000/api/photo/" + this.postResponse,
            formData
          );
          if (response.data.success) {
            console.log(response.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
      this.$router.push("/");
    },
    uploadImage(e) {
      const previewImage = {
        id: Date.now() + Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        image: null,
        imageName: "",
      };
      previewImage.imageName = e.target.files[0].name;
      this.photoFiles.push(e.target.files[0]);
      // const file = e.target.files;
      // let formData = new FormData();
      // formData.append("photo", file);
      // const response = await this.axios.post(
      //   "http://localhost:3000/api/test/photo/" + this.getCurrentUser.id,
      //   formData
      // );
      // if (response.data.success) {
      //   console.log(response.data);
      // }
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        previewImage.image = e.target.result;
        console.log(previewImage.image);
        this.images.push(previewImage);
      };
    },
    removeImage(imageId) {
      const imageIndex = this.images.findIndex(
        (imageObj) => imageObj.id === imageId
      );
      this.images.splice(imageIndex, 1);
    },
    setMap(address) {
      this.position.lat = address.geometry.location.lat();
      this.position.lng = address.geometry.location.lng();
      this.listingData.position = this.position;
      this.listingData.location = address.formatted_address;
      this.zoom = 15;
      this.showMarker = true;
      const addressComponents = address.address_components;
      console.log(address);
      addressComponents.forEach((comp) => {
        if (comp.types.includes("locality")) {
          this.listingData.city = comp.long_name;
        }
        if (comp.types.includes("country")) {
          this.listingData.country = comp.long_name;
        }
      });
    },
  },
};
</script>

<style scoped>
.myfix3 {
  padding-top: 100px;
}
.myMapFix {
  height: 40vh;
  padding-bottom: 20px;
}

h3 {
  font-weight: 600;
}
.one-half {
  padding: 0px 12px;
}

.my-fix {
  bottom: 40px !important;
}
h4 {
  font-weight: 450;
}
.whole-radio-container {
  margin-top: 20px;
}
.radio-buttons-container {
  margin: 5px;
  display: flex;
}
.radio {
  margin-right: 30px;
}
.radio label {
  padding-left: 10px;
}
.media {
  margin: 10px;
  padding-top: 10px;
}
</style>
