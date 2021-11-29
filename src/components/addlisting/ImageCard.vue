<template>
  <div class="container">
    <div class="image-view">
      <div class="images">
        <img :src="image" />
      </div>
    </div>
    <div class="imageName">
      <label>{{ imageName }}</label>
    </div>
    <div class="removeIamgeContainer">
      <i class="ti-close removeIamge" @click="removeImage"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "imageName", "id"],
  methods: {
    removeImage() {
      this.$emit("remove-image", this.id);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 15px;
  display: flex;
  width: 100%;
  height: 12vh;
  background: rgba(236, 228, 228, 0.4);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.image-view {
  padding-top: 10px;
  width: 80px;
  height: 120px;
}
.imageName {
  padding: 15px;
  padding-top: 27px;
}
.removeIamgeContainer {
  padding-top: 28px;
  padding-left: 130px;
}
.removeIamge {
  cursor: pointer;
}
</style>
