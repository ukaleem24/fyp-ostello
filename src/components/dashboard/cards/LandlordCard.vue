<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="imagebox style2">
        <div class="box-imagebox">
          <div class="myfix">
            <div class="box-header">
              <div class="box-image">
                <img :src="listingPhotos[0]" alt="" />
                <router-link :to="listingUrl">Preview</router-link>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-content">
              <div class="box-title">
                <a href="#" title="" class="addressName"
                  >{{ currency }}{{ price }} </a
                ><i class="fa fa-check-circle" aria-hidden="true"></i>
              </div>
              <ul class="rating">
                <li>4.5 rating</li>

                <li>{{ type }}</li>
              </ul>
              <div class="box-desc">
                <p>{{ description }}</p>
              </div>
              <ul class="location">
                <li class="address city">
                  <span class="ti-location-pin"></span>
                  <p>{{ listing.city }}, {{ listing.country }}</p>
                </li>
                <li class="remove">
                  <button @click="removeListing">Remove</button>
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
  props: [
    "id",
    "price",
    "address",
    "type",
    "image",
    "description",
    "currency",
    "listing",
  ],
  data() {
    return {
      listingPhotos: [],
      tempPhoto: null,
    };
  },
  methods: {
    async removeListing() {
      const roomId = this.id;
      console.log(roomId);
      const response = await this.axios.delete(
        "http://localhost:3000/api/delete/listing/" + roomId
      );
      console.log(response.data.message);
      this.$store.dispatch("removeListing", { id: this.id });
    },
  },
  computed: {
    listingUrl() {
      return "/room/" + this.id;
    },
  },
  async created() {
    //getting images of a listing to display on card
    try {
      const roomId = this.id;
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
<style scoped>
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
