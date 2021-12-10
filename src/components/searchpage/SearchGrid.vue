<template>
  <simple-search-bar></simple-search-bar>
  <section class="flat-row flat-imagebox style3">
    <div class="container">
      <div class="row">
        <grid-card
          v-for="result in searchResults"
          :key="result._id"
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
    return {
      searchResults: [],
    };
  },

  computed: {},
  async beforeCreate() {
    const searchQuery = this.$route.params.searchQuery;
    console.log(searchQuery);
    const response = await this.axios.get(
      "http://localhost:3000/api/search/listings/" + searchQuery
    );
    console.log(response.data.searchResults);
    this.searchResults = response.data.searchResults;
  },
};
</script>
