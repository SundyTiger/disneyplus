<template>
  <a
    class="carousel-control-prev"
    :href="phref"
    role="button"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
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