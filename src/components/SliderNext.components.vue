<template>
  <a class="carousel-control-" :href="nhref" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</template>

<script>
export default {
  name: "NextControl",
  props: {
    nhref: String,
  },
};
</script>

<style scoped>
.marpad {
  margin: -15;
}
</style>
