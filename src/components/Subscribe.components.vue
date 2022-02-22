<template>
  <div class="modal-dialog bodyclr1">
    <div class="modal-content">
      <div class="modal-header bodyclr1">
        <h5 class="modal-title text-white-50">
          Subscribe to watch all content on Disney+ Hotstar
        </h5>
      </div>
      <div class="modal-body bodyclr1 text-white">
        <table class="table text-white text-start">
          <thead>
            <tr>
              <th scope="col" colspan="3"></th>
              <th scope="col" class="text-warning">Free</th>
              <th scope="col">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3">
                All content <br />
                <small> Movies, TV, Specials</small>
              </td>
              <td>
                <img
                  src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png"
                  width="24px"
                  height="24px"
                />
              </td>
              <td>
                <img
                  src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png"
                  width="24px"
                  height="24px"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">Watch on TV or Laptop</td>
              <td>
                <img
                  src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/cross/smp/web-2x.png"
                  width="24px"
                  height="24px"
                />
              </td>
              <td>
                <img
                  src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png"
                  width="24px"
                  height="24px"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">movies and shows</td>
              <td>
                <img
                  src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/cross/smp/web-2x.png"
                  width="24px"
                  height="24px"
                />
              </td>
              <td>
                <img
                  src="https://secure-media.hotstar.com/static/subscription/paywall_service/comparator/tick/smp/web-1x.png"
                  width="24px"
                  height="24px"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer bodyclr1">
        <td>
          <button
            type="button"
            class="btn btn-primary"
            @click="displayRazorPay(1499)"
          >
            <p class="text-warning">Premium</p>
            <p>₹1499/Year</p>
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-primary"
            @click="displayRazorPay(299)"
          >
            <p class="text-warning">Premium</p>
            <p>₹299/Month</p>
          </button>
        </td>
      </div>
    </div>
  </div>
</template>

<script>
import Payments from "../services/Payments.services";
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    },
    async displayRazorPay(amount) {
      const res = await this.loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("RazorPay SDK Failed");
        return;
      }
      const data = await Payments.Payment(amount)
        .then((res) => res.data)
        .catch((e) => e);
      console.log(data);
      const options = {
        key: "rzp_test_bY7W5uPWI5hcrx",
        currency: data.currency,
        amount: data.amount,
        name: "Disney Plus HotStar",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id,
        handler: function (response) {
          try {
            console.log(response);
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          } catch (e) {
            console.log(e);
          }
        },
        prefill: {
          name: "Gaurav Kumar",
        },
      };
      const paymentObj = new window.Razorpay(options);
      paymentObj.open();
    },
  },
  async created() {},
};
</script>

<style></style>
