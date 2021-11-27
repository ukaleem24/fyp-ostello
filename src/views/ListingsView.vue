<template>
  <the-header></the-header>
  <landlord-listing></landlord-listing>
  <the-footer></the-footer>
</template>

<script>
import LandlordListing from "../components/listingview/LandlordListing.vue";
export default {
  components: {
    LandlordListing,
  },
};
</script>
