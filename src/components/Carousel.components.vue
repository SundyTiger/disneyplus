<template>
  <div class="row mb-2">
    <div class="col-10 m-auto">
      <div id="slider1" class="carousel slide" data-bs-ride="carousel">
        <Indicators :data="carArray.slice(0, 5)" />
        <div class="carousel-inner" role="listbox">
          <Inner
            :data="x"
            :index="i"
            v-for="(x, i) in carArray.slice(0, 5)"
            :key="i"
          />
        </div>
        <PrevControl phref="#slider1" v-if="carArray.length > 1" />
        <NextControl nhref="#slider1" v-if="carArray.length > 1" />
      </div>
    </div>
  </div>
</template>

<script>
import Indicators from "../components/CarouselIndicator.components.vue";
import Inner from "../components/CarouselInner.components.vue";
import NextControl from "../components/CarouselNext.components.vue";
import PrevControl from "../components/CarouselPrev.components.vue";
export default {
  name: "Carousel",
  props: {
    carArray: Array,
  },
  components: {
    Indicators,
    Inner,
    NextControl,
    PrevControl,
  },
  data() {
    return {
      data: [],
    };
  },
};
</script>

<style></style>
