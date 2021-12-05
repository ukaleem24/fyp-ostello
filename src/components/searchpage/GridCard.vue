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
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
              <font-awesome-icon icon="star"></font-awesome-icon>
            </div>
          </div>
        </div>

        <!-- /.box-header -->
        <div class="box-content">
          <div class="box-title">
            <a href="#" title="">{{ listing.price }} {{ listing.currency }}</a
            ><i class="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <ul class="rating">
            <li>{{ listing.averageRating }} rating</li>
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
            <span class="ti-location-pin"></span>{{ listing.address }}
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
};
</script>
