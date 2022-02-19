<template>
  <div>
    <div class="row mx-3">
      <h5 class="text-start text-white">{{ id }}</h5>
      <Images iheight="120" iwidth="210" :id="id" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Aboutpage.components.vue";
import Images from "./routerImages.components.vue";
import User from "../services/User.services";
export default {
  props: ["id"],
  components: {
    Footer,
    Images,
  },
  data() {
    return {
      Srcs: [],
    };
  },
  methods: {},
  async created() {
    this.Srcs = await User.filterMovie({ Language: this.id })
      .then((res) => res.data.filterData)
      .catch((e) => e);
    console.log(this.Srcs);
    this.$store.dispatch("setImgSrcs", this.Srcs);
  },
};
</script>

<style scoped></style>
