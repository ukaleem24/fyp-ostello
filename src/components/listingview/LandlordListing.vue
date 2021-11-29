<template>
  <search-section></search-section>
  <!-- ---------Filter and listing Section--------- -->
  <!-- -------------------------------------------- -->

  <section class="flat-row flat-imagebox style3">
    <div class="container">
      <!-- ---------Filter-Section--------- -->
      <!-- -------------------------------- -->
      <div class="row">
        <div class="col-md-12">
          <div class="filter style2">
            <div class="filter-title">
              <h5>Filter by tag:</h5>
              <span class="ti-angle-down"></span>
            </div>
            <div class="clearfix"></div>
            <div class="select-filter">
              <ul class="list-filter quarter">
                <li class="active">
                  <span class="ti-check-box"></span>Wireless Internet
                </li>
                <li>
                  <span class="ti-layout-width-full"></span>Street Parking
                </li>
              </ul>
              <ul class="list-filter quarter">
                <li><span class="ti-layout-width-full"></span>Pets Friendly</li>
                <li><span class="ti-layout-width-full"></span>Cable TV</li>
              </ul>
              <ul class="list-filter quarter">
                <li><span class="ti-layout-width-full"></span>Pool</li>
                <li><span class="ti-layout-width-full"></span>Washer</li>
              </ul>
              <ul class="list-filter quarter">
                <li>
                  <span class="ti-layout-width-full"></span>Ultra High End
                </li>
                <li><span class="ti-layout-width-full"></span>Pricey</li>
              </ul>
              <div class="clearfix"></div>
            </div>
          </div>

          <!-- ---------Filter-Result-Section--------- -->
          <!-- --------------------------------------- -->

          <div class="filter-result style2">
            <div class="result">{{ getListings.length }} Results Found</div>
            <ul class="arrange">
              <li class="active">
                <span class="ti-view-grid"></span>
              </li>
              <li>
                <span class="ti-view-list"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ---------Listing-Section--------- -->
      <!-- -------------------------------- -->
      <landlord-card
        v-for="listing in getListings"
        :key="listing.id"
        :id="listing.id"
        :price="listing.price"
        :address="listing.address"
        :type="listing.type"
        :image="listing.images[0].image"
        :description="listing.description"
        :currency="listing.currency"
      ></landlord-card>

      <div class="row">
        <div class="col-md-12">
          <div class="btn-more">
            <a href="#" title="">Show More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------Listing-Section--------- -->
  <!-- -------------------------------- -->
</template>

<script>
import SearchSection from "./SearchSection.vue";
import LandlordCard from "./LandlordCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SearchSection,
    LandlordCard,
  },
  computed: {
    ...mapGetters(["getListings"]),
  },
};
</script>
