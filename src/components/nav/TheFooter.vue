<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="widget widget-about">
            <div class="logo-ft">
              <a href="#" title=""> Ostello </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <!-- /.widget-about -->
        </div>
        <!-- /.col-md-3 -->
        <div class="col-md-3">
          <div class="widget widget-categories">
            <h3 class="widget-title">Categories</h3>
            <ul class="one-half">
              <li>
                <a href="#" title="">Foot</a>
              </li>
              <li>
                <a href="#" title="">Hotel</a>
              </li>
              <li>
                <a href="#" title="">Play</a>
              </li>
              <li>
                <a href="#" title="">Automove</a>
              </li>
            </ul>
            <ul class="one-half">
              <li>
                <a href="#" title="">Shop</a>
              </li>
              <li>
                <a href="#" title="">Fitness</a>
              </li>
              <li>
                <a href="#" title="">Nightlife</a>
              </li>
              <li>
                <a href="#" title="">Park</a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <!-- /.widget-categories -->
        </div>
        <!-- /.col-md-3 -->
        <div class="col-md-3">
          <div class="widget widget-contact">
            <h3 class="widget-title">Contact</h3>
            <ul class="contact-infomation">
              <li class="address">
                <div class="icon-container">
                  <font-awesome-icon
                    class="icon"
                    icon="map-marker-alt"
                  ></font-awesome-icon>
                  <p class="icon-label">
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </p>
                </div>
              </li>
              <li class="phone">
                <div class="icon-container">
                  <font-awesome-icon
                    class="icon"
                    icon="phone-alt"
                  ></font-awesome-icon>
                  <p class="icon-label">(+92) 333-9938642</p>
                </div>
              </li>
              <li class="email">
                <div class="icon-container">
                  <font-awesome-icon
                    class="icon"
                    icon="envelope"
                  ></font-awesome-icon>
                  <p class="icon-label">ostello@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- /.widget-contact -->
        </div>
        <!-- /.col-md-3 -->
        <div class="col-md-3">
          <div class="widget widget-map">
            <img src="../../assets/images/page/bg-ft.png" alt="" />
          </div>
          <!-- /.widget-map -->
        </div>
        <!-- /.col-md-3 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </footer>
  <!-- /footer -->

  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="social-ft">
            <li>
              <a href="#" title="">
                <i class="ti-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i class="ti-twitter-alt" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i class="ti-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i class="ti-google" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i class="ti-pinterest" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <!-- /.social-ft -->
          <div class="copyright">
            © 2017 Copyright by Deercreative. All rights reserved.
          </div>
          <!-- /.copyright -->
        </div>
        <!-- /.col-md-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.footer-bottom -->

  <div class="button-go-top">
    <a href="#" title="" class="go-top"> <i class="fa fa-chevron-up"></i> </a
    ><!-- /.go-top -->
  </div>
  <!-- /.button-go-top -->
</template>

<style scoped>
.icon-container {
  display: flex;
  padding-bottom: 10px;
}
.icon {
  padding-top: 4px;
  font-size: 20px;
}
.icon-label {
  padding-left: 15px;
  font-size: 15.5px;
}
.widget-contact ul.contact-infomation li:before {
  content: unset;
}
.widget-contact ul.contact-infomation li.phone:before {
  content: unset;
}
.widget-contact ul.contact-infomation li.email:before {
  content: unset;
}
.widget-contact ul.contact-infomation li {
  padding-left: unset;
}
</style>
