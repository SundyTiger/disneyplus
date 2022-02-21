<template>
  <div class="my-4 text-white">
    <SLink
      ><h5 class="text-start list-group-none">{{ name }}</h5></SLink
    >
    <div>
      <div :id="sId" class="carousel slide" data-bs-ride="carousel">
        <Inner :imgData="imgData" :iwidth="iwidth" :iheight="iheight" />
        <NextControl :nhref="shref(sId)" v-if="show()" />
        <PrevControl :phref="shref(sId)" v-if="show()" />
      </div>
    </div>
  </div>
</template>

<script>
import NextControl from "./SliderNext.components.vue";
import PrevControl from "./SliderPrev.components.vue";
import Inner from "./SliderInner.Components.vue";
import SLink from "./Aboutlink.components.vue";
export default {
  name: "Slider",
  props: {
    name: String,
    sId: String,
    imgData: Array,
    iwidth: String,
    iheight: String,
  },
  components: {
    NextControl,
    PrevControl,
    Inner,
    SLink,
  },
  data() {
    return {
      disArrow: false,
    };
  },
  methods: {
    shref(sId) {
      return `#${sId}`;
    },
    show() {
      if (this.imgData.length === 1) {
        return false;
      } else {
        return true;
      }
    },
  },
  async created() {
    await console.log(this.show());
  },
};
</script>

<style></style>
