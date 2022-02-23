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
      data: [],
    };
  },
  methods: {},
  async created() {
    await User.filterMovie({ Language: this.id })
      .then((res) => {
        this.Srcs = res.data.filterData;
        this.$store.dispatch("setImgSrcs", this.Srcs);
      })
      .catch((e) => e);
    if (this.Srcs.length == 0) {
      await User.filterMovie({ Geners: this.id })
        .then((res) => {
          this.Srcs = res.data.filterData;
          this.$store.dispatch("setImgSrcs", this.Srcs);
        })
        .catch((e) => e);
    }
    if (this.id == "WatchList") {
      console.log(this.$store.state.watchlist);
      for (let x of this.$store.state.watchlist) {
        await User.filterMovie({ Title: x })
          .then((res) => this.Srcs.push(res.data.filterData[0]))
          .catch((e) => e);
      }
    }
  },
};
</script>

<style scoped></style>
