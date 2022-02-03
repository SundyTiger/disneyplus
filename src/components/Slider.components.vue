<template>
  <div class="my-4 text-white">
    <SLink
      ><h5 class="text-start list-group-none">{{ name }}</h5></SLink
    >
    <div>
      <div :id="sId" class="carousel slide" data-bs-ride="carousel">
        <Inner />
        <NextControl :nhref="shref(sId)" />
        <PrevControl :phref="shref(sId)" />
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
  },
  components: {
    NextControl,
    PrevControl,
    Inner,
    SLink,
  },
  data() {
    return {};
  },
  methods: {
    shref(sId) {
      return `#${sId}`;
    },
  },
};
</script>

<style></style>
