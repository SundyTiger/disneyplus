<template>
  <div class="col-2 my-2" v-for="(imgSrc, i) in imgSrcs" :key="i">
    <img
      class="d-block rounded-3"
      :src="imgSrc.src"
      :alt="imgSrc.alt"
      :width="iwidth"
      :height="iheight"
    />
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    imgSrcs: Array,
    iwidth: String,
    iheight: String,
  },
};
</script>

<style></style>
