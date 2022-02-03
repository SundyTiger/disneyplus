<template>
  <TheNavBar />
  <Carousel />
  <About />
</template>

<script>
import TheNavBar from "../components/TheNavBar.component.vue";
import About from "../components/Aboutpage.components.vue";
import Carousel from "../components/Carousel.components.vue";
export default {
  name: "DisneyPlus",
  components: {
    TheNavBar,
    About,
    Carousel,
  },
};
</script>

<style></style>
