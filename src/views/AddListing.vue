<template>
  <the-header></the-header>
  <design-add-listing></design-add-listing>
  <listing-form></listing-form>
  <the-footer></the-footer>
</template>

<script>
import ListingForm from "../components/addlisting/ListingForm.vue";
import DesignAddListing from "../components/addlisting/DesignAddListing.vue";

export default {
  components: {
    ListingForm,
    DesignAddListing,
  },
  beforeCreate() {
    const currentUser = this.$store.getters.getCurrentUser;
    if (!currentUser.active) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
h3 {
  font-weight: 600;
}
</style>
