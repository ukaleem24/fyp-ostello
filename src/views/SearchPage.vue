<template>
  <the-header></the-header>
  <search-grid :key="searchQuery"></search-grid>
  <the-footer></the-footer>
</template>

<script>
import SearchGrid from "../components/searchpage/SearchGrid.vue";
export default {
  components: {
    SearchGrid,
  },
  data() {
    return {
      searchQuery: 0,
    };
  },
  watch: {
    $route(to) {
      this.searchQuery = to.fullPath;
      console.log("Inside watcher");
    },
  },
};
</script>
