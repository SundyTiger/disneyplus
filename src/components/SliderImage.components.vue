<template>
  <div class="ps-3" v-for="(imgSrc, i) in imgSrcs" :key="i">
    <router-link
      :to="{
        name: 'Details',
        params: { id: 'Hindi', title: imgSrc.Title },
      }"
    >
      <img
        class="d-block rounded-3"
        :src="imgSrc.Image"
        :alt="imgSrc.Name"
        :width="iwidth"
        :height="iheight"
      />
    </router-link>
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
