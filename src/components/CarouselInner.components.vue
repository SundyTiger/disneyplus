<template>
  <div :class="carClass(index)">
    <div>
      <div class="card cardclr1 text-white">
        <div class="card-body d-flex">
          <div>
            <div class="card-title">{{ data.Name }}</div>
            <div class="card-subtitle">
              <span>{{ data.Stream }}</span>
              <span>{{ data.Language }}</span>
              <span>{{ data.Certified }}</span>
            </div>
            <p class="card-text">
              {{ data.Description }}
            </p>
          </div>
          <div>
            <img :src="data.Image" :alt="data.Title" width="700" height="350" />
          </div>
        </div>
      </div>
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
