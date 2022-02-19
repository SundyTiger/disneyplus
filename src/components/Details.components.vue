<template>
  <div class="card cardclr1 text-white mx-4" @click.prevent="pushRoute()">
    <div class="card-body d-flex">
      <div class="mt-5 pt-4 ms-4">
        <div class="h4 fw-bold text-start card-title">{{ Data.Name }}</div>
        <div class="card-subtitle text-white-50 text-start pt-2">
          <span>{{ Data.Lenth }}</span
          ><i class="bi bi-dot"></i> <span>{{ Data.Year }}</span
          ><i class="bi bi-dot"></i>
          <span>{{ Data.Language }}</span>
        </div>
        <p class="card-text text-start pt-2">{{ Data.Description }}</p>
      </div>
      <div>
        <img
          class=".img-fluid .img-thumbnail"
          :src="Data.Image"
          :alt="Data.Title"
          width="700"
          height="350"
        />
      </div>
    </div>
  </div>
</template>

<script>
import User from "../services/User.services";
export default {
  props: ["id", "title"],
  data() {
    return {
      Data: [],
    };
  },
  methods: {
    pushRoute() {
      return this.$router.push({
        name: "VideoPlay",
        params: { id: this.id, title: this.title, name: this.title },
      });
    },
  },
  async created() {
    if (this.title) {
      this.Data = await User.filterMovie({ Title: this.title }).then(
        (res) => res.data.filterData[0]
      );
      if (!this.Data) {
        return this.$router.push({ name: "NotFound" });
      }
    } else {
      return this.$router.push({ name: "NotFound" });
    }
  },
};
</script>

<style>
@media screen and (max-width: 992px) {
  .column {
    width: 50%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
