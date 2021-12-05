<template>
  <section class="page-title style1 parallax parallax1">
    <div class="container search-bar-fix">
      <div class="row">
        <div class="col-md-12">
          <div class="wrap-box-search style1">
            <form action="#" method="get" accept-charset="utf-8">
              <span>
                <input
                  type="text"
                  placeholder="What are you looking for ?"
                  name="search"
                  :value="$route.params.searchQuery"
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
  computed: {
    searchQuery() {
      console.log(this.$route.params.searchQuery);
      return this.$route.params.searchQuery;
    },
  },
};
</script>
