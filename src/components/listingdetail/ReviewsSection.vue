<template>
  <li class="comment">
    <article class="comment-body">
      <div class="comment-image">
        <img class="authorImg" :src="profileimage" alt="" />
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
            <font-awesome-icon
              class="black-star"
              icon="star"
              v-for="rate in blackRating"
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
      profileimage: "https://www.w3schools.com/howto/img_avatar.png",
      blackRating: 0,
    };
  },
  props: ["author", "photo", "rating", "authorReview", "title"],
  created() {
    this.intRating = parseInt(this.rating);
    this.blackRating = 5 - this.intRating;
    if (this.photo != null) {
      this.profileimage = "http://localhost:3000/" + this.photo;
    }
  },
};
</script>
<style scoped>
.authorImg {
  border-radius: 50%;
  height: 70px;
}
.black-star {
  color: #2c3e50;
}
</style>
