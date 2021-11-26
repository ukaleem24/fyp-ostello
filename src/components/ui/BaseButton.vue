<template>
  <button :class="className" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["className"],
};
</script>

<style scoped>
button {
  margin: 0 4px;
  border-radius: 0;
}
.outline {
  border: 1px solid #ffffff;
  background-color: #003580;
  color: #ffffff;
}

.plain {
  background-color: #ffffff;
  color: #003580;
  font-weight: 550;
  font-size: 95%;
}

.outline:hover {
  background-color: #022e6d;
  color: #ffffff;
}

.plain:hover {
  border: 1px solid #ffffff;
  background-color: #003580;
  color: #ffffff;
}
</style>
