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
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
            <font-awesome-icon icon="star"></font-awesome-icon>
          </span>
        </h5>
        <div class="comment-author">
          by <a href="#" title="">{{ author }}</a>
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
  props: ["author", "authorImage", "ratting", "authorReview", "title"],
};
</script>
<style scoped>
.authorImg {
  border-radius: 50%;
  height: 70px;
}
</style>
