<template>
  <dashboard-listings></dashboard-listings>
</template>

<script>
import DashboardListings from "../../components/dashboard/DashboardListings.vue";
export default {
  components: {
    DashboardListings,
  },
  beforeCreate() {
    const currentUser = this.$store.getters.getCurrentUser;
    if (!currentUser.active) {
      this.$router.push("/login");
    }
  },
};
</script>
