<template>
  <section class="flat-row flat-team">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="flat-row-title center">
            <h2>Team Behind Ostello</h2>
            <p>We are one</p>
          </div>
          <!-- /.flat-row-title -->
        </div>
        <!-- /.col-md-12 -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="team-container">
          <div class="team">
            <div class="member">
              <div class="member-image">
                <img src="../../assets/images/members/usama.jpg" alt="" />
              </div>
              <div class="">
                <h4 class="name">Usama Ilyas</h4>
                <div class="option">CEO</div>
              </div>
            </div>
            <!-- /.team-member -->
            <div class="member">
              <div class="member-image">
                <img src="../../assets/images/members/usama.jpg" alt="" />
              </div>
              <div class="">
                <h4 class="name">Kaleem Ullah</h4>
                <div class="option">CEO Assistant</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- /.owl-carousel -->

      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.flat-team -->
</template>

<style scoped>
.flat-team .flat-row-title {
  margin-bottom: unset;
}
.team-container {
  padding-left: 270px;
}
.flat-team {
  padding: 30px 0 30px;
}
.team {
  display: flex;
  text-align: center;
}
.member-image {
  margin-bottom: 40px;
}
.member-image img {
  width: 140px;
  height: 140px;
  border-radius: 110px !important;
}
.member {
  display: flex;
  flex-direction: column;
  margin: 30px 30px 30px 110px;
}
</style>
