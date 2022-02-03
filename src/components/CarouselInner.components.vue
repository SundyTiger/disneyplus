<template>
  <div :class="carClass(index)">
    <div class="d-flex">
      <div class="card cardclr1 text-white">
        <div class="card-body">
          <div class="card-title">{{ data.title }}</div>
          <div class="card-subtitle">
            <span>{{ data.channel }}</span>
            <span>{{ data.lang }}</span>
            <span>{{ data.cert }}</span>
          </div>
          <p class="card-text">
            {{ data.Info }}
          </p>
        </div>
      </div>
      <img :src="data.imgSrc" :alt="data.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Inner",
  props: {
    data: Object,
    index: Number,
  },
  methods: {
    carClass(i) {
      if (i == 0) {
        return "carousel-item active";
      } else {
        return "carousel-item";
      }
    },
  },
};
</script>

<style></style>
