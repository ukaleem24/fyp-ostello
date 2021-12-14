<template>
  <div class="container1">
    <div class="row">
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold" for="">**** **** **** 1060</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Expiry date:</span
              ><span>10/16</span></small
            >
            <small
              ><span class="fw-bold">Name: </span><span> Your Name</span></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold">**** **** **** 1060</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Expiry date:</span
              ><span>10/16</span></small
            >
            <small
              ><span class="fw-bold">Name: </span
              ><span> Your Name </span></small
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-3">
        <div class="card p-3">
          <div class="img-box">
            <img
              src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
              alt=""
            />
          </div>
          <div class="number">
            <label class="fw-bold">**** **** **** 1060</label>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <small
              ><span class="fw-bold">Expiry date:</span
              ><span>10/16</span></small
            >
            <small
              ><span class="fw-bold">Name: </span><span> Your Name</span></small
            >
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card p-3">
          <p class="mb-0 fw-bold h4">Payment Method</p>
        </div>
      </div>
      <div class="col-12">
        <div class="card p-3">
          <div class="card-body border p-0">
            <p>
              <a
                class="
                  btn btn-primary
                  p-2
                  w-100
                  h-100
                  d-flex
                  align-items-center
                  justify-content-between
                "
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                <span class="fw-bold">Credit Card</span>
                <span class="">
                  <span class="fab fa-cc-amex"></span>
                  <span class="fab fa-cc-mastercard"></span>
                  <span class="fab fa-cc-discover"></span>
                </span>
              </a>
            </p>
            <div class="collapse show p-3 pt-0" id="collapseExample">
              <div class="row">
                <div class="col-lg-5 mb-lg-0 mb-3">
                  <p class="h4 mb-0">Summary</p>
                  <p class="mb-0">
                    <span class="fw-bold">Product:</span
                    ><span class="c-green">: Name of product</span>
                  </p>
                  <p class="mb-0">
                    <span class="fw-bold">Price:</span>
                    <span class="c-green">
                      listing.currency.toUpperCase() listing.price
                    </span>
                  </p>
                  <p class="mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque nihil neque quisquam aut repellendus, dicta vero?
                    Animi dicta cupiditate, facilis provident quibusdam ab quis,
                    iste harum ipsum hic, nemo qui!
                  </p>
                </div>
                <div class="col-lg-7">
                  <form action="" class="form" @submit.prevent="submitPayment">
                    <div class="row">
                      <div class="col-12">
                        <div class="nes-field myfix1">
                          <label for="email_field " class="mylabel"
                            >Credit Card</label
                          >
                          <div
                            id="stripe-element-mount-point"
                            class="nes-input"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="form__div">
                          <label class="mylabel">Name On The Card</label>
                          <input type="text" class="myInput" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="btn btn-primary w-100" type="submit">
                          Sumbit
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="btn btn-primary payment" @click="submitPayment">
          Make Payment
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
const style = {
  style: {
    base: {
      color: "#000",
      fontWeight: "500",
      fontFamily: "Press Start 2P",
      fontSize: "20px",

      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "grey",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red",
    },
  },
};
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      bookingDetails: null,
      tenant: null,
      listing: null,
    };
  },
  setup() {
    const router = useRouter();
    let stripe = null;
    let loading = ref(true);
    let elements = null;
    onMounted(async () => {
      const ELEMENT_TYPE = "card";
      stripe = await loadStripe(
        "pk_test_51K5YIOD3gTIDkZP8RkAub7kN9YVNr8Ufdvx31knoAYdc1PBmiNb2tg0GAj1SMNGFADewJuk3QnY65fRibcfOs2Z500W15ewoCs"
      );
      elements = stripe.elements();
      const element = elements.create(ELEMENT_TYPE, style);
      element.mount("#stripe-element-mount-point");
      loading.value = false;
    });
    async function handleSubmit(event) {
      if (loading.value) return;
      loading.value = true;
      const { name, email, address, city, state, zip } = Object.fromEntries(
        new FormData(event.target)
      );
      console.log("here", name, email, address, city, state, zip);
      const billingDetails = {
        name,
        email,
        address: {
          city,
          line1: address,
          state,
          postal_code: zip,
        },
      };
      const cardElement = elements.getElement("card");
      try {
        const response = await fetch("http://localhost:3001/stripe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 1999 }),
        });
        const { secret } = await response.json();
        console.log("secret", secret);
        const paymentMethodReq = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails,
        });
        console.log("error?", paymentMethodReq);
        const { error } = await stripe.confirmCardPayment(secret, {
          payment_method: paymentMethodReq.paymentMethod.id,
        });
        loading.value = false;
        console.log("error?", error);
        router.push("/success");
      } catch (error) {
        console.log("error", error);
        loading.value = false;
      }
    }
    return { loading, handleSubmit };
  },
  computed: {
    ...mapGetters(["getUserImage", "getCurrentUser"]),
  },
  methods: {
    async submitPayment() {
      const data = {
        totalPrice: this.listing.price,
        email: this.tenant.email,
        name: this.tenant.fName + this.tenant.lName,
        currency: this.listing.currency,
        bookingId: this.$route.params.bookingId,
      };
      try {
        const response = await this.axios.post(
          "http://localhost:3000/api/payment",
          data
        );
        if (response.data.success) {
          console.log(response.data);
          this.$router.push("/dashboard/inbox");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    console.log("Inside created");
    //if user is not logged in, push to the login page
    if (this.getCurrentUser.active === false) {
      this.$router.push("/login");
    }
    console.log(this.$route.params.bookingId);
    //Getting booking details from server for processing payment
    try {
      const response = await this.axios.get(
        "http://localhost:3000/api/booking/details/" +
          this.$route.params.bookingId
      );
      if (response.data.success) {
        this.bookingDetails = response.data.booking[0];
        this.tenant = this.bookingDetails.tenant;
        this.listing = this.bookingDetails.listing;
        console.log(response.data.booking);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
/* ///////////////////////////// */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.mylabel {
  padding-top: 5px;
  font-weight: 500;
  font-size: 15px;
  color: black;
}
.myInput {
  border: none;
  outline: none !important;
  font-size: 20px;
  padding-top: 0px;
}
.myInput:focus {
  border: none !important;
}
.container1 {
  margin: 30px auto;
}

.container1 .card {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #fff;
  border-radius: 0px;
}
.myfix1 div {
  padding: 5px 0px 20px;
}
body {
  background: #eee;
}

.btn.btn-primary {
  background-color: #ddd;
  color: black;
  box-shadow: none;
  border: none;
  font-size: 20px;
  width: 100%;
  height: 100%;
}

.btn.btn-primary:focus {
  box-shadow: none;
}

.container1 .card .img-box {
  width: 80px;
  height: 50px;
}

.container1 .card img {
  width: 100%;
  object-fit: fill;
}

.container1 .card .number {
  font-size: 24px;
}

.container1 .card-body .btn.btn-primary .fab.fa-cc-paypal {
  font-size: 32px;
  color: #3333f7;
}

.fab.fa-cc-amex {
  color: #1c6acf;
  font-size: 32px;
}

.fab.fa-cc-mastercard {
  font-size: 32px;
  color: red;
}

.fab.fa-cc-discover {
  font-size: 32px;
  color: orange;
}

.c-green {
  color: green;
}

.box {
  height: 40px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
}

.btn.btn-primary.payment {
  background-color: #1c6acf;
  color: white;
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}
form {
  padding-top: 20px;
}
.form__div {
  height: 50px;
  position: relative;
  margin-bottom: 24px;
}

.form-control {
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: 1px solid #dadce0;
  border-radius: 0;
  outline: none;
  padding: 2px;
  background: none;
  z-index: 1;
  box-shadow: none;
}

.form__label {
  position: absolute;
  left: 16px;
  top: 10px;
  background-color: #fff;
  color: #80868b;
  font-size: 16px;
  transition: 0.3s;
  text-transform: uppercase;
}

.form-control:focus + .form__label {
  top: -8px;
  left: 12px;
  color: #1a73e8;
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
}

.form-control:not(:placeholder-shown).form-control:not(:focus) + .form__label {
  top: -8px;
  left: 12px;
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
}

.form-control:focus {
  border: 1.5px solid #1a73e8;
  box-shadow: none;
}
</style>
