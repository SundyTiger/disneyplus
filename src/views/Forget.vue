<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body bodyclr1">
        <h3 class="text-white-50">Forget PassWord</h3>
        <form @submit.prevent="Forget()" autocomplete="false">
          <div class="ms-5 me-5 mb-4 d-flex">
            <input
              type="email"
              class="form-control backgroundclr2 border-0 logInInput border-bottom rounded-0 border-primary text-white"
              placeholder="Enter your email"
              v-model="email"
              :readonly="otpBox == true"
            />
            <button
              type="button"
              class="btn btn-primary text-white"
              @click.prevent="SendOtp()"
            >
              OTP
            </button>
          </div>
          <span class="text-danger">{{ emailError }}</span>
          <div class="ms-5 me-5 mb-3" v-if="otpBox == true">
            <input
              type="text"
              class="form-control backgroundclr2 border-0 border-bottom logInInput rounded-0 border-primary text-white"
              placeholder="Enter OTP"
              v-model="otp"
            />
          </div>
          <span class="text-danger">{{ otpError }}</span>
          <div class="ms-5 me-5 mb-3">
            <input
              type="password"
              class="form-control backgroundclr2 border-0 border-bottom logInInput rounded-0 border-primary text-white"
              placeholder="Enter your password"
              v-model="password"
            />
          </div>
          <span class="text-danger">{{ passError }}</span>
          <div class="ms-5 me-5 mb-3">
            <input
              type="password"
              class="form-control backgroundclr2 border-0 border-bottom logInInput rounded-0 border-primary text-white"
              placeholder="Re-Enter Password"
              v-model="confirm_password"
            />
            <small v-if="err" class="text-danger">{{ err }}</small>
          </div>
          <div class="d-flex ms-5">
            <div class="mt-4 me-4 mb-5">
              <button
                type="reset"
                @click="resetData()"
                class="btn btn-danger text-white"
              >
                Reset
              </button>
            </div>
            <div class="mt-4 me-4 mb-5">
              <button type="submit" class="btn btn-primary text-white">
                Change PassWord
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../services/User.services";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
export default {
  data() {
    return {
      confirm_password: "",
      otpBox: false,
      err: "",
    };
  },
  setup() {
    const validation = yup.object({
      email: yup.string().email().lowercase().required(),
      password: yup.string().min(8).required(),
      otp: yup.string().length(6).required(),
    });
    useForm({
      validationSchema: validation,
    });
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passError } = useField("password");
    const { value: otp, errorMessage: otpError } = useField("otp");
    const { resetForm, handleSubmit } = useForm();
    return {
      email,
      password,
      otp,
      emailError,
      passError,
      otpError,
      resetForm,
      handleSubmit,
    };
  },
  methods: {
    async SendOtp() {
      await User.OtpSend(this.email)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => (this.err = e));
      this.otpBox = true;
    },
    async Forget() {
      if (this.password == this.confirm_password) {
        let data = await User.UserForgotPass(
          this.email,
          this.password,
          this.otp
        )
          .then((res) => res)
          .catch((e) => (this.err = e));
        if (data.status == 200) {
          this.resetForm();
          this.$router.push({ name: "Home" });
        } else {
          this.err = "Email Id Already Exists";
        }
      } else {
        this.err = "password doesn't match";
      }
    },
    async resetData() {
      this.otpBox = false;
      this.resetForm();
    },
  },
};
</script>

<style></style>
