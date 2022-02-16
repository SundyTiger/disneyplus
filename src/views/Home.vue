<template>
  <div class="container-fluid">
    <Carousel />
    <Slider
      name="Latest &#38; Trending"
      sId="Slider2"
      :Data="data"
      :imgData="imgArray"
    />
    <Slider
      name="Popular Shows"
      sId="Slider3"
      :Data="data"
      :imgData="imgArray"
    />
    <Slider
      name="Popular Series"
      sId="Slider4"
      :Data="data"
      :imgData="imgArray"
    />
    <Slider
      name="Popular Anime"
      sId="Slider5"
      :Data="data"
      :imgData="imgArray"
    />
    <AboutPage />
  </div>
</template>
<script>
import Carousel from "../components/Carousel.components.vue";
import Slider from "../components/Slider.components.vue";
import AboutPage from "../components/Aboutpage.components.vue";
import User from "../services/User.services";
export default {
  components: {
    Carousel,
    Slider,
    AboutPage,
  },
  data() {
    return {
      data: [],
      imgArray: [],
    };
  },
  async created() {
    this.data = await User.UserMovies().then((res) => res.data.movies);
    this.$store.commit("CREATE_ARR", this.data);
    this.imgArray = this.$store.state.imgArray;
    this.$store.commit("NULL_VAL", this.data);
    this.$store.commit("GLOBAL", this.data);
  },
};
</script>
<style scoped></style>
