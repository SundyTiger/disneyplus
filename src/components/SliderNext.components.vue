<template>
  <a
    class="carousel-control-next"
    :href="nhref"
    role="button"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
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

<style></style>