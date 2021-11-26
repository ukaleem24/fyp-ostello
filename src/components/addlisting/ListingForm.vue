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
                  <select name="category" id="type" v-model="type">
                    <option value="default">Select Type</option>
                    <option value="volvo">House</option>
                    <option value="saab">Building</option>
                    <option value="mercedes">Apartment</option>
                  </select>
                </div>
              </div>
              <!-- /.wrap-listing -->
              <div class="clearfix"></div>
              <div class="wrap-listing location">
                <label>Location (optional)</label>
                <span class="ti-target"></span>
                <input
                  type="text"
                  name="yourname"
                  placeholder="e.g.”New York”"
                  v-model="address"
                />
              </div>
              <!-- /.wrap-listing -->
              <div class="pdmap style2" id="flat-map">
                <div
                  class="flat-maps"
                  data-address="Thành phố New York, Tiểu bang New York"
                  data-name="Themesflat Map"
                ></div>
                <div class="gm-map">
                  <div class="map-3"></div>
                </div>
              </div>
              <!-- /#flat-map -->
              <div class="wrap-listing phone">
                <label>Phone</label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="+92 312 3456789"
                  v-model="phone"
                />
              </div>
              <!-- /.wrap-listing -->
              <div class="wrap-listing website">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="http://"
                  v-model="website"
                />
              </div>
              <!-- /.wrap-listing -->
              <div class="clearfix"></div>
            </div>

            <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
            <!-- Pricing-section:    -->
            <div class="inner-box form style1">
              <h3>Pricing and availability</h3>
              <br />
              <div class="one-half">
                <div class="wrap-listing category">
                  <label>Minimum rental period *</label>
                  <span class="ti-angle-down"></span>
                  <select name="category" v-model="rentalPeriod">
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
                    v-model="availableFrom"
                  />
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price-from">
                  <label>Price</label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    v-model="price"
                  />
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price-to category">
                  <label>Currency</label>
                  <span class="ti-angle-down my-fix"></span>
                  <select name="category" v-model="currency">
                    <option value="pkr">PKR</option>
                    <option value="eur">EUR</option>
                  </select>
                </div>
                <!-- /.wrap-listing -->
              </div>
              <div class="one-half">
                <div class="wrap-listing category">
                  <label>Category</label>
                  <span class="ti-angle-down"></span>
                  <select name="category">
                    <option value="">Choose Your Bussines Category</option>
                    <option value="">Choose Your Bussines Category</option>
                    <option value="">Choose Your Bussines Category</option>
                  </select>
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price">
                  <label>Price Range</label>
                  <span class="ti-angle-down"></span>
                  <select name="category">
                    <option value="">Pricey</option>
                    <option value="">Pricey</option>
                    <option value="">Pricey</option>
                  </select>
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price-from">
                  <label>Price From</label>
                  <input type="text" name="price" placeholder="Price From" />
                </div>
                <!-- /.wrap-listing -->
                <div class="wrap-listing price-to">
                  <label>Price To</label>
                  <input type="text" name="price" placeholder="Price To" />
                </div>
                <!-- /.wrap-listing -->
              </div>

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
                          value="no"
                          v-model="bed"
                        />
                        <label for="noBed">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesBed"
                          name="bed"
                          value="yes"
                          v-model="bed"
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
                          value="no"
                          v-model="wifi"
                        />
                        <label for="noWifi">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesWifi"
                          name="wifi"
                          value="yes"
                          v-model="wifi"
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
                          value="no"
                          v-model="washingMachine"
                        />
                        <label for="noWashingMachine">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesWashingMachine"
                          name="washingmachine"
                          value="yesWashingMachine"
                          v-model="washingMachine"
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
                          value="no"
                          v-model="dryer"
                        />
                        <label for="nodryer">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesdryer"
                          name="dryer"
                          value="yes"
                          v-model="dryer"
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
                          value="no"
                          v-model="tv"
                        />
                        <label for="notv">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yestv"
                          name="tv"
                          value="yes"
                          v-model="tv"
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
                          value="no"
                          v-model="airConditioner"
                        />
                        <label for="noair">No</label>
                      </div>
                      <div class="radio">
                        <input
                          type="radio"
                          id="yesair"
                          name="airconditioner"
                          value="yes"
                          v-model="airConditioner"
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
            <!-- Images-section:    -->
            <div class="inner-box style3">
              <div class="one-half">
                <label>Your Business Images</label>
                <div class="browse">
                  <p>Drag & Drop files here</p>
                  <span>or</span>
                  <div class="upload">
                    <span>Browse files</span>
                    <input type="file" name="upload-file" />
                  </div>
                </div>
              </div>
              <!-- /.one-half -->
              <div class="one-half">
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
export default {
  data() {
    return {
      listingData: {
        kind: "default",
        type: "default",
        address: "",
        phone: "",
        rentalPeriod: "default",
        availableFrom: "",
        price: "",
        currency: "pkr",
        bed: "",
        wifi: "",
        washingMachine: "",
        dryer: "",
        tv: "",
        airConditioner: "",
      },
    };
  },
  methods: {
    submitListing() {
      this.$store.dispatch("addNewListing", this.listingData);
      console.log(this.$store.getters.getListings);
    },
  },
};
</script>

<style scoped>
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
</style>
