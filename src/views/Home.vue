<template>
  <div class="container-fluid">
    <TheNavBar />
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
import TheNavBar from "../components/TheNavBar.component.vue";
import Carousel from "../components/Carousel.components.vue";
import Slider from "../components/Slider.components.vue";
import AboutPage from "../components/Aboutpage.components.vue";
import User from "../services/User.services";
export default {
  components: {
    TheNavBar,
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
    console.log(this.data);
    this.$store.commit("CREATE_ARR", this.data);
    this.imgArray = this.$store.state.imgArray;
    this.$store.commit("NULL_VAL", this.data);
  },
};
</script>
<style scoped></style>
