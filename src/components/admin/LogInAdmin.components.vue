<template>
  <form @submit.prevent="funcLogIn()">
    <div class="mb-3 d-flex justify-content-center">
      <label for="Email" class="form-label me-1">Email address:</label>
      <input
        type="email"
        class="form-control-sm"
        id="Email"
        aria-describedby="emailHelp"
        v-model.lazy="email"
      />
    </div>
    <div class="mb-3 ps-4">
      <label for="Password" class="form-label me-1">Password:</label>
      <input
        type="password"
        class="form-control-sm"
        id="Password"
        v-model.lazy="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <h3 class="m-auto text-danger mt-5" v-if="error">{{ error }}</h3>
</template>

<script>
import Admin from "../../services/Admin.services.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async funcLogIn() {
      try {
        const res = await Admin.AdminLogIn(this.email, this.password)
          .then((res) => res)
          .catch((err) => (this.error = err.response.data.message));
        console.log(res);
        localStorage.removeItem("token");
        localStorage.setItem("token", res["data"]["accessToken"]);
        if (res["status"] == 200) {
          window.user = this.email;
          this.$router.push({ name: "AdminDashBoard" });
        }
        return res;
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
};
</script>

<style></style>
