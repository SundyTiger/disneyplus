<template>
  <nav class="navbar navbar-expand-lg text-white mx-5">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <button type="button" class="btn btn-primary" @click="logOut()">
        LogOut
      </button>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logOut() {
      window.user = null;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
