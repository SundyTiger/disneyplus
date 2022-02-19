<template>
  <ol class="carousel-indicators">
    <li
      :class="i == 0 ? 'active' : ''"
      :data-bs-slide-to="i"
      data-bs-target="#slider1"
      v-for="(x, i) in data"
      :key="i"
    ></li>
  </ol>
</template>

<script>
export default {
  name: "Indicators",
  props: {
    data: Array,
  },
  async created() {
    console.log(this.data);
  },
};
</script>

<style></style>
