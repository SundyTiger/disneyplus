<template>
  <a
    :href="nhref"
    class="carousel-control-next"
    data-bs-slide="next"
    style="margin-right: -120px"
  >
    <span
      class="carousel-control-next-icon"
      style="width: 250px; height: 50px"
      aria-hidden="true"
    ></span>
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
