<template>
  <nav class="navbar navbar-expand-lg text-white mx-5">
    <HamBurger />
    <router-link class="navbar-brand ms-2 mb-2" to="/">
      <img
        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
        alt="Disney+&nbsp;Hotstar"
      />
    </router-link>
    <TheNav />
    <!-- <router-view :key="$route.path" /> -->
  </nav>
</template>
<script>
import HamBurger from "../components/TheNavBrHamBurger.component.vue";
import TheNav from "../components/TheNav.component.vue";
export default {
  name: "TheNavBar",
  components: {
    HamBurger,
    TheNav,
  },
};
</script>

<style scoped></style>
