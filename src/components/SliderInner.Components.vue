<template>
  <div class="carousel-inner">
    <Block
      :class="imgSrc.class"
      :imgSrcs="imgSrc.imgSrcs"
      v-for="(imgSrc, i) in imgSrcs"
      :key="i"
      :iwidth="iwidth"
      :iheight="iheight"
    />
  </div>
</template>

<script>
import Block from "./SliderBlock.components.vue";
export default {
  name: "Inner",
  components: {
    Block,
  },
  data() {
    return {
      imgSrcs: [
        {
          class: "carousel-item active",
          imgSrcs: [
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
        {
          class: "carousel-item",
          imgSrcs: [
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
      ],
      iwidth: "150",
      iheight: "200",
    };
  },
};
</script>

<style></style>
