<template>
  <div
    class="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2"
    v-for="(imgSrc, i) in $store.state.imgSrcs"
    :key="i"
  >
    <router-link
      :to="{ name: 'Details', params: { id: id, title: imgSrc.Title } }"
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
    iwidth: String,
    iheight: String,
    id: String,
  },

  methods: {},
};
</script>

<style></style>
