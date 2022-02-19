<template>
  <div class="carousel-inner">
    <Block
      :class="imgSrc.class"
      :imgSrcs="imgSrc.imgSrcs"
      v-for="(imgSrc, i) in imgData"
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
  props: {
    imgData: Array,
    iwidth: String,
    iheight: String,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
