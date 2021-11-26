<template>
  <div class="preloader" v-if="togglePreloader">
    <div class="clear-loading loading-effect-2">
      <span></span>
    </div>
  </div>
  <the-header></the-header>
  <page-title></page-title>
  <mix-comp></mix-comp>
  <the-cards></the-cards>
  <section-discover></section-discover>
  <section-team></section-team>
  <the-footer></the-footer>
</template>

<script>
import PageTitle from "../components/nav/PageTitle.vue";
import MixComp from "../components/nav/MixComp.vue";
import TheCards from "../components/nav/TheCards.vue";
import SectionDiscover from "../components/nav/SectionDiscover.vue";
import SectionTeam from "../components/nav/SectionTeam.vue";

export default {
  components: {
    PageTitle,
    MixComp,
    TheCards,
    SectionDiscover,
    SectionTeam,
  },
  data() {
    return {
      togglePreloader: true,
    };
  },
  beforeCreate() {
    setTimeout(() => (this.togglePreloader = false), 1000);
  },
};
</script>
