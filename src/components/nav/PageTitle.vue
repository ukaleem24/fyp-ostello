<template>
  <section class="page-title style2 parallax parallax1">
    <div class="container search-bar-fix">
      <div class="row">
        <div class="col-md-12">
          <div class="page-title-heading">Discover the Best Places</div>
          <div class="text-heading">
            Expolore top-rated attractions, activities and more
          </div>
          <div class="wrap-box-search">
            <form @submit="redirectSearchPage">
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
                />
              </span>
              <span class="location">
                <span class="ti-location-pin"></span>
                <input type="text" placeholder="Location" name="location" />
              </span>
              <span class="categories">
                <span class="ti-angle-down"></span>
                <select name="categories">
                  <option value="">All Categories</option>
                  <option value="">All Categories</option>
                  <option value="">All Categories</option>
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
      searchQuery: "",
    };
  },
  methods: {
    redirectSearchPage() {
      this.$router.push("/search/" + this.searchQuery);
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
};
</script>
