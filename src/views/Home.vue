<template>
  <div class="container-fluid">
    <Carousel :carArray="carArray" />
    <Slider
      name="Latest &#38; Trending"
      sId="Slider2"
      iwidth="150"
      iheight="200"
      :imgData="CREATE_ARR(carArray)"
    />
    <Slider
      name="Popular Shows"
      sId="Slider3"
      iwidth="150"
      iheight="200"
      :imgData="CREATE_ARR(imgArray)"
    />
    <Slider
      name="Popular Series"
      sId="Slider4"
      iwidth="150"
      iheight="200"
      :imgData="CREATE_ARR(carArray)"
    />
    <Slider
      name="Popular Anime"
      sId="Slider5"
      iwidth="150"
      iheight="200"
      :imgData="CREATE_ARR(imgArray)"
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
      latestArray: [],
      carArray: [],
    };
  },
  methods: {
    CREATE_ARR(data) {
      let imgArray = [];
      let imgData = [];
      let imgObj = {};
      for (let x in data) {
        if (imgArray.length <= 10) {
          if (imgArray.length == 0) {
            imgObj["class"] = "carousel-item active";
          } else {
            imgObj["class"] = "carousel-item";
          }
          if (imgData.length == 7) {
            imgObj["imgSrcs"] = imgData;
            imgArray.push(imgObj);
            imgData = [];
            imgObj = {};
          } else {
            imgData.push(data[x]);
          }
        } else {
          break;
        }
      }
      imgObj["imgSrcs"] = imgData;
      imgArray.push(imgObj);
      return imgArray;
    },
  },
  async created() {
    this.imgArray = await User.UserMovies().then((res) => res.data.movies);
    this.carArray = await User.filterMovie({ Year: "2021" })
      .then((res) => res.data.filterData)
      .catch((e) => e);
  },
};
</script>
<style scoped></style>
