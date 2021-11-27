<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="imagebox style2">
        <div class="box-imagebox">
          <div class="box-header">
            <div class="box-image">
              <img src="../../assets/images/page/img-v2-02.png" alt="" />
              <a href="#" title="">Preview</a>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-content">
            <div class="box-title">
              <a href="#" title="">{{ address }}</a
              ><i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <ul class="rating">
              <li>{{ price }}</li>

              <li>4.5 rating</li>

              <li>Hotel</li>
            </ul>
            <div class="box-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <ul class="location">
              <li class="address">
                <span class="ti-location-pin"></span>Rawalpindi, Islamabad
              </li>
              <li class="open">Open Now !</li>
            </ul>
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
  props: ["price", "address"],
};
</script>
