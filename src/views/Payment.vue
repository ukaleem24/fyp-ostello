<template>
  <the-header></the-header>
  <div class="main">
    <payment-cmp></payment-cmp>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "../components/nav/TheFooter.vue";
import PaymentCmp from "../components/payment/PaymentCmp.vue";

export default {
  components: {
    PaymentCmp,
    TheFooter,
  },
};
</script>

<style scoped>
.main {
  max-width: 768px;
  margin: auto;
  margin-top: 100px;
}
</style>
