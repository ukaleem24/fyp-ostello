<template>
  <div class="main">
    <payment-cmp></payment-cmp>
  </div>
</template>

<script>
import PaymentCmp from "../components/payment/PaymentCmp.vue";

export default {
  components: {
    PaymentCmp,
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
