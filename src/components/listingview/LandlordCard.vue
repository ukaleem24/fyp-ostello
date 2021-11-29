<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="imagebox style2">
        <div class="box-imagebox">
          <div class="myfix">
            <div class="box-header">
              <div class="box-image">
                <img :src="image" alt="" />
                <a href="#" title="">Preview</a>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-content">
              <div class="box-title">
                <a href="#" title="" class="addressName">{{ address }}</a
                ><i class="fa fa-check-circle" aria-hidden="true"></i>
              </div>
              <ul class="rating">
                <li>
                  <p class="price">{{ currency }} {{ price }}</p>
                </li>

                <li>4.5 rating</li>

                <li>{{ type }}</li>
              </ul>
              <div class="box-desc">
                <p>{{ description }}</p>
              </div>
              <ul class="location">
                <li class="address city">
                  <span class="ti-location-pin"></span>
                  <p>Rawalpindi, Islamabad</p>
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
  props: ["id", "price", "address", "type", "image", "description", "currency"],
  methods: {
    removeListing() {
      this.$store.commit("removeListing", { id: this.id });
    },
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
