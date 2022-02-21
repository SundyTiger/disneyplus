<template>
  <div :class="Class">
    <div class="d-flex ms-5">
      <Image :imgSrcs="imgSrcs" :iwidth="iwidth" :iheight="iheight" />
    </div>
  </div>
</template>

<script>
import Image from "./SliderImage.components.vue";
export default {
  name: "Inner",
  components: {
    Image,
  },
  props: {
    Class: String,
    imgSrcs: Array,
    iwidth: String,
    iheight: String,
  },
};
</script>

<style></style>
