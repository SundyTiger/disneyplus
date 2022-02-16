<template>
  <div>
    <div class="mx-lg-3 ms-sm-0">
      <div class="text-white">
        <a
          class="btn text-white border-0"
          data-bs-toggle="modal"
          data-bs-target="#modal1"
          v-if="!$store.state.isUser"
          >LOGIN</a
        >
        <div class="dropdown" v-if="$store.state.isUser">
          <a
            class="dropdown-toggle"
            id="logInDrop"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../assets/User.svg" alt="icon"
          /></a>
          <ul class="dropdown-menu bodyclr1 pe-3" aria-labelledby="logInDrop">
            <li>
              <router-link class="dropdown-item text-white hoverclr1" to="/"
                >WatchList</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item text-white hoverclr1" to="/"
                >My Account</router-link
              >
            </li>
            <li>
              <a
                class="dropdown-item text-white hoverclr1"
                @click="logOut()"
                to="/"
                >LogOut</a
              >
            </li>
          </ul>
        </div>
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
                    >Have An Account</a
                  >
                </div>
                <div class="text-center">or</div>
                <div data-bs-dismiss="modal">
                  <router-link
                    :to="{ name: 'Register' }"
                    class="link-primary text-decoration-none"
                    >Register</router-link
                  >
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
                  <h5 class="ms-5">Have an Account?</h5>
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
                  <form @submit.prevent="logIn()" autocomplete="false">
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
                    <div class="ms-5 mb-5" data-bs-dismiss="modal">
                      <router-link
                        :to="{ name: 'Forget' }"
                        class="link-primary text-decoration-none"
                        >Forgot?</router-link
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
    };
  },
  components: {},
  methods: {
    async logIn() {
      await User.UserLogIn(this.email, this.password)
        .then((res) => {
          this.$store.dispatch("setToken", res.data.accessToken);
          this.$store.dispatch("setUser", res.data.user);
        })
        .catch((err) => (this.error = err.response.data.message));
    },
    logOut() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  min-width: 4vw;
}
</style>
