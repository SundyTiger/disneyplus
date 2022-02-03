<template>
  <a
    :href="phref"
    class="carousel-control-prev"
    style="margin-left: -120px"
    data-bs-slide="prev"
  >
    <span
      class="carousel-control-prev-icon"
      style="width: 250px; height: 50px"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Previous</span>
  </a>
</template>

<script>
export default {
  name: "PrevControl",
  props: {
    phref: String,
  },
};
</script>

<style></style>
