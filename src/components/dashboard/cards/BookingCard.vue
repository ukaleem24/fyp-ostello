<template>
  <div class="col-md-4">
    <div class="imagebox style1">
      <div class="box-imagebox">
        <div class="box-header">
          <div class="box-image">
            <img
              src="https://housinganywhere.imgix.net/room/1666164/2c7b7d12-4352-4220-b79f-46f27da8e820.jpg?auto=format&fit=clip&orient=0&ixlib=react-9.2.0&w=1446"
              alt=""
            />
            <a href="#" title="">Preview</a>
            <div class="overlay"></div>
            <div class="queue">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
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
};
</script>
