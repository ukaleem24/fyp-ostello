<template>
  <section class="page-title style1 parallax parallax1">
    <div class="container search-bar-fix">
      <div class="row">
        <div class="col-md-12">
          <div class="wrap-box-search style1">
            <form @submit.prevent="redirectSearchPage">
              <span>
                <GMapAutocomplete
                  type="text"
                  placeholder="What are you looking for ?"
                  name="search"
                  id="location"
                  :options="{
                    componentRestrictions: { country: ['pk'] },
                    strictBounds: true,
                    types: ['(cities)'],
                  }"
                  @place_changed="setPlace"
                  @input="inputChanged"
                  @keyup.enter="redirectSearchPage"
                  :value="searchQuery"
                />
              </span>
              <span class="location">
                <span class="ti-location-pin"></span>
                <input type="text" placeholder="Location" name="location" />
              </span>
              <span class="categories">
                <span class="ti-angle-down"></span>
                <select name="categories" v-model="category">
                  <option value="all">All Categories</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                </select>
              </span>
              <button type="submit" class="search-btn">Search</button>
            </form>
            <!-- /form -->
          </div>
          <!-- /.wrap-box-search -->
        </div>
        <!-- /.col-md-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <div class="overlay"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: this.$route.params.searchQuery,
      category: "all",
    };
  },
  computed: {
    // computedSearchQuery() {
    //   console.log(this.$route.params.searchQuery);
    //   return this.$route.params.searchQuery;
    // },
  },

  methods: {
    redirectSearchPage() {
      this.$router.push({
        name: "Search",
        params: { searchQuery: this.searchQuery, category: this.category },
      });
    },
    setPlace(place) {
      const addressComponents = place.address_components;
      if (addressComponents) {
        addressComponents.forEach((comp) => {
          if (comp.types.includes("locality")) {
            this.searchQuery = comp.long_name;
          }
        });
      }
    },
    inputChanged(e) {
      this.searchQuery = e.target.value;
    },
  },
  mounted() {
    if (this.$route.params.category) {
      this.category = this.$route.params.category.toString();
    }
  },
};
</script>
