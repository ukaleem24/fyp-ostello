<template>
  <simple-search-bar></simple-search-bar>
  <section class="flat-row flat-imagebox style3">
    <div class="container">
      <div class="row">
        <grid-card
          v-for="result in searchResults"
          :key="result.id"
          :listing="result"
        ></grid-card>
      </div>
    </div>
  </section>
</template>

<script>
import GridCard from "../searchpage/GridCard.vue";
import SimpleSearchBar from "../nav/SimpleSearchBar.vue";

export default {
  components: {
    GridCard,
    SimpleSearchBar,
  },
  data() {
    return {};
  },

  computed: {
    searchResults() {
      const allListings = this.$store.getters.getListings;
      const searchQuery = this.$route.params.searchQuery;
      const searchResults = allListings.filter((listing) =>
        listing.address.includes(searchQuery)
      );
      console.log(searchQuery);
      console.log(searchResults);
      return searchResults;
    },
  },
};
</script>
