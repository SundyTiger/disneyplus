<template>
  <div :class="carClass(index)">
    <router-link
      :to="{
        name: 'Details',
        params: { id: 'Hindi', title: data.Title },
      }"
      class="text-decoration-none"
    >
      <div class="card cardclr1 text-white">
        <div class="card-body d-flex">
          <div class="mt-5 pt-4">
            <div class="h4 fw-bold text-start card-title">{{ data.Name }}</div>
            <div class="card-subtitle text-white-50 text-start pt-2">
              <span>{{ data.Lenth }}</span
              ><i class="bi bi-dot"></i>
              <span>{{ data.Year }}</span>
              <i class="bi bi-dot"></i>
              <span>{{ data.Language }}</span>
            </div>
            <p class="card-text text-start pt-2">
              {{ data.Description }}
            </p>
          </div>
          <div>
            <img :src="data.Image" :alt="data.Title" width="700" height="400" />
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Inner",
  props: {
    data: Object,
    index: Number,
    id: String,
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
