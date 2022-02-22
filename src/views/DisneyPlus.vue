<template>
  <Carousel :carArray="DisneyPlusArray" />
  <About />
</template>

<script>
import About from "../components/Aboutpage.components.vue";
import Carousel from "../components/Carousel.components.vue";
import User from "../services/User.services";
export default {
  name: "DisneyPlus",
  data() {
    return {
      DisneyPlusArray: [],
    };
  },
  components: {
    About,
    Carousel,
  },
  async created() {
    this.DisneyPlusArray = await User.filterMovie({
      Stream: "Disney Plus",
    })
      .then((res) => res.data.filterData)
      .catch((e) => e);
  },
};
</script>

<style></style>
