<template>
  <div :class="carClass(index)">
    <router-link
      :to="{
        name: 'Details',
        params: { id: data.Language, title: data.Title },
      }"
      class="text-decoration-none"
    >
      <div class="card cardclr1 text-white">
        <div class="card-body d-flex">
          <div class="mt-5 pt-4 display">
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
            <img
              class="responsive"
              :src="data.Image"
              :alt="data.Title"
              width="700"
              height="400"
            />
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

<style scoped>
.responsive {
  width: 700;
  max-width: 700px;
  height: 350;
}
@media screen and (max-width: 992px) {
  .responsive {
    width: 500;
    max-width: 400px;
    height: 200px;
  }
  .display {
    padding: 0;
  }
}
@media screen and (max-width: 792px) {
  .responsive {
    width: 50;
    max-width: 450px;
    height: 190px;
  }
  .display {
    display: none;
  }
}
/* On screens that are 600px wide or less, the background color is olive */
@media screen and (max-width: 600px) {
  .responsive {
    width: 50;
    max-width: 320px;
    height: 170px;
  }
  .display {
    display: none;
  }
}
</style>
