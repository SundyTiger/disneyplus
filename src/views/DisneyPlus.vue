<template>
  <Carousel />
  <About />
</template>

<script>
import About from "../components/Aboutpage.components.vue";
import Carousel from "../components/Carousel.components.vue";
export default {
  name: "DisneyPlus",
  components: {
    About,
    Carousel,
  },
};
</script>

<style></style>
