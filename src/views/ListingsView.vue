<template>
  <the-header></the-header>
  <listings />
  <the-footer></the-footer>
</template>

<script>
import Listings from "../components/addlisting/Listings.vue";

export default {
  components: {
    Listings,
  },
};
</script>
