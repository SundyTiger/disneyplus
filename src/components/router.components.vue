<template>
  <NavBar />
  <div class="row mx-3">
    <h5 class="text-start text-white">{{ routesName }}</h5>
    <Images :imgSrcs="findRoutes()" iheight="120" iwidth="210" />
  </div>
  <Footer />
</template>

<script>
import NavBar from "./TheNavBar.component.vue";
import Footer from "./Aboutpage.components.vue";
import Images from "./routerImages.components.vue";
export default {
  components: {
    NavBar,
    Footer,
    Images,
  },
  data() {
    return {
      destination: [],
      routesName: this.$route.params.id,
      imgSrcs: {
        "HotStar Specials": [
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4840/1064840-v-913253e507fe",
            alt: "Shiddat",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978",
            alt: "Dance+",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6097/1056097-v-36f647f17cee",
            alt: "Bhoot Police",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9895/1059895-v-bc89231f8f01",
            alt: "Anaabel Rathore",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2944/1052944-v-0ed37e31f3a3",
            alt: "Black Widow",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8632/1048632-v-380ed721403f",
            alt: "Crucela",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1472/1051472-v-34c24c5361ee",
            alt: "The Empire",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5763/1045763-v-1d9f41f00c89",
            alt: "Bhuj",
          },
        ],
        Quix: [
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4840/1064840-v-913253e507fe",
            alt: "Shiddat",
          },
          {
            src: "https://img1.hotstarext.com/image/uploa0d/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978",
            alt: "Dance+",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6097/1056097-v-36f647f17cee",
            alt: "Bhoot Police",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9895/1059895-v-bc89231f8f01",
            alt: "Anaabel Rathore",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2944/1052944-v-0ed37e31f3a3",
            alt: "Black Widow",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8632/1048632-v-380ed721403f",
            alt: "Crucela",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1472/1051472-v-34c24c5361ee",
            alt: "The Empire",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5763/1045763-v-1d9f41f00c89",
            alt: "Bhuj",
          },
        ],
        "Star Jalsha": [
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4840/1064840-v-913253e507fe",
            alt: "Shiddat",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978",
            alt: "Dance+",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6097/1056097-v-36f647f17cee",
            alt: "Bhoot Police",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9895/1059895-v-bc89231f8f01",
            alt: "Anaabel Rathore",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2944/1052944-v-0ed37e31f3a3",
            alt: "Black Widow",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8632/1048632-v-380ed721403f",
            alt: "Crucela",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1472/1051472-v-34c24c5361ee",
            alt: "The Empire",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5763/1045763-v-1d9f41f00c89",
            alt: "Bhuj",
          },
        ],
        "Star Plus": [
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4840/1064840-v-913253e507fe",
            alt: "Shiddat",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978",
            alt: "Dance+",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6097/1056097-v-36f647f17cee",
            alt: "Bhoot Police",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9895/1059895-v-bc89231f8f01",
            alt: "Anaabel Rathore",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2944/1052944-v-0ed37e31f3a3",
            alt: "Black Widow",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8632/1048632-v-380ed721403f",
            alt: "Crucela",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1472/1051472-v-34c24c5361ee",
            alt: "The Empire",
          },
          {
            src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5763/1045763-v-1d9f41f00c89",
            alt: "Bhuj",
          },
        ],
      },
    };
  },
  methods: {
    findRoutes() {
      for (let key in this.imgSrcs) {
        if (key === this.routesName) {
          this.destination = this.imgSrcs[key];
          console.log(this.id);
          return this.destination;
        }
      }
    },
  },
};
</script>

<style scoped></style>
