<template>
  <li class="comment">
    <article class="comment-body">
      <div class="comment-image">
        <img class="authorImg" :src="authorImage" alt="" />
      </div>
      <!-- /.comment-image -->
      <div class="comment-content">
        <h5>
          {{ title }}
          <span>
            <font-awesome-icon
              icon="star"
              v-for="rate in intRating"
              :key="rate"
            ></font-awesome-icon>
          </span>
        </h5>
        <div class="comment-author">
          by <a href="#" title="">{{ author.fName }} {{ author.lName }}</a>
        </div>
        <p>
          {{ authorReview }}
        </p>
      </div>
      <!-- /.comment-content -->
    </article>
    <!-- /.comment-body -->
  </li>
  <!-- /.comment -->
</template>
<script>
export default {
  data() {
    return {
      intRating: null,
      authorImage: "https://www.w3schools.com/howto/img_avatar.png",
    };
  },
  props: ["author", "rating", "authorReview", "title"],
  created() {
    this.intRating = parseInt(this.rating);
  },
};
</script>
<style scoped>
.authorImg {
  border-radius: 50%;
  height: 70px;
}
</style>
