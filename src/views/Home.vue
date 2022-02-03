<template>
  <div class="container-fluid">
    <TheNavBar />
    <Carousel />
    <Slider name="Latest &#38; Trending" sId="Slider2" />
    <Slider name="Popular Shows" sId="Slider3" />
    <Slider name="Popular Series" sId="Slider4" />
    <Slider name="Popular Anime" sId="Slider5" />
    <AboutPage />
  </div>
</template>
<script>
import TheNavBar from "../components/TheNavBar.component.vue";
import Carousel from "../components/Carousel.components.vue";
import Slider from "../components/Slider.components.vue";
import AboutPage from "../components/Aboutpage.components.vue";
export default {
  components: {
    TheNavBar,
    Carousel,
    Slider,
    AboutPage,
  },
};
</script>
<style scoped></style>
