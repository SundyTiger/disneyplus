<template>
  <div>
    <div class="mx-lg-3 ms-sm-0">
      <div class="text-white">
        <a
          class="btn text-white border-0"
          data-bs-toggle="modal"
          data-bs-target="#modal1"
          v-if="logShow == false"
          >LOGIN</a
        >
        <img src="../assets/User.svg" alt="icon" v-else />
        <div class="modal" id="modal1">
          <div class="modal-dialog" style="margin-top: 7vw">
            <div class="modal-content">
              <div class="modal-body bodyclr1">
                <div class="d-flex justify-content-end">
                  <div class="btn btn-close" data-bs-dismiss="modal"></div>
                </div>
                <div class="ms-5 mt-5 mb-5">
                  <h5>Login to continue</h5>
                </div>
                <div
                  class="ms-5 me-5 mt-4 mx-auto border rounded-2 py-3 border-primary backgroundclr1 mb-2"
                >
                  <a
                    class="btn text-center text-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modal2"
                    >Have a Email Account</a
                  >
                </div>
                <div class="text-center">or</div>
                <div class="ms-5 me-5 d-flex mt-3" style="margin-bottom: 5vw">
                  <label class="mt-1 border-bottom border-primary">+91|</label>
                  <input
                    class="form-control text-white backgroundclr2 border-0 border-bottom rounded-0 border-primary logInInput"
                    placeholder="Enter your mobile number"
                    type="text"
                    pattern="[0-9]*"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal" id="modal2">
          <div class="modal-dialog" style="margin-top: 7vw">
            <div class="modal-content">
              <div class="modal-body bodyclr1">
                <div class="d-flex justify-content-between">
                  <div class="ms-3">
                    <a data-bs-toggle="modal" data-bs-target="#modal1"
                      ><i class="fa fa-arrow-left" style="color: #1f80e0"></i
                    ></a>
                  </div>
                  <div class="btn btn-close" data-bs-dismiss="modal"></div>
                </div>
                <div class="mt-4">
                  <h5 class="ms-5">Have an Email Account?</h5>
                  <div class="ms-5 me-5">
                    <input
                      type="email"
                      class="form-control backgroundclr2 border-0 border-bottom rounded-0 border-primary logInInput text-white"
                      placeholder="Enter your email"
                      v-model.lazy="email"
                    />
                  </div>
                  <div class="ms-5 mt-4 me-4">
                    <button
                      type="submit"
                      class="btn btn-primary text-white pt-0 ps-4"
                      data-bs-toggle="modal"
                      data-bs-target="#modal3"
                    >
                      CONTINUE <i class="fa fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal" id="modal3">
          <div class="modal-dialog" style="margin-top: 7vw">
            <div class="modal-content">
              <div class="modal-body bodyclr1">
                <div class="d-flex justify-content-between">
                  <div class="ms-3">
                    <a data-bs-toggle="modal" data-bs-target="#modal2"
                      ><i class="fa fa-arrow-left" style="color: #1f80e0"></i
                    ></a>
                  </div>
                  <div class="btn btn-close" data-bs-dismiss="modal"></div>
                </div>
                <div class="mt-4">
                  <h5 class="ms-5">Log In!</h5>
                  <form @submit.prevent="logIn()">
                    <div class="ms-5 me-5 mb-4">
                      <input
                        type="email"
                        class="form-control backgroundclr2 border-0 border-bottom rounded-0 border-primary text-black-50"
                        placeholder="Enter your email"
                        :value="email"
                        readonly
                      />
                    </div>
                    <div class="ms-5 me-5 mb-3">
                      <input
                        type="password"
                        class="form-control backgroundclr2 border-0 border-bottom logInInput rounded-0 border-primary text-white"
                        placeholder="Enter your password"
                        v-model.lazy="password"
                      />
                    </div>
                    <div class="ms-5 mb-5">
                      <a href="#" class="link-primary text-decoration-none"
                        >Forgot?</a
                      >
                    </div>
                    <div class="ms-5 mt-4 me-4 mb-5">
                      <button
                        type="submit"
                        class="btn btn-primary text-white pt-0 ps-4"
                        data-bs-dismiss="modal"
                      >
                        CONTINUE <i class="fa fa-angle-right"></i>
                      </button>
                    </div>
                  </form>
                  <h2>{{ error }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../services/User.services";
export default {
  data() {
    return {
      email: "",
      password: "",
      res: {},
      error: "",
      logShow: false,
    };
  },
  components: {},
  methods: {
    async logIn() {
      await User.UserLogIn(this.email, this.password)
        .then((res) => {
          console.log(res);
          localStorage.setItem("user_token", res.data.accessToken);
          this.logShow = true;
        })
        .catch((err) => (this.error = err.response.data.message));
    },
  },
};
</script>

<style></style>
