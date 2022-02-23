<template>
  <div class="flex-column mb-3 dropdown">
    <input
      type="search"
      class="form-control w-100 border-0 border-bottom rounded-0 logInInput bodyclr0 text-white"
      placeholder="Search"
      id="searchfield"
      name="searchfield"
      v-model="Search"
    />
    <div
      class="card position-fixed bodyclr1"
      v-if="searchData.length > 0"
      style="width: 18rem"
      aria-labelledby="searchfield"
    >
      <router-link
        class="card-body d-flex text-decoration-none justify-content-between"
        v-for="data in searchData"
        :key="data._id"
        :to="{
          name: 'Details',
          params: { id: data.Language, title: data.Title },
        }"
        @click="searChBox()"
      >
        <p class="card-title text-primary">{{ data.Name }}</p>
        <img :src="data.Image" width="50" height="50" />
      </router-link>
    </div>
  </div>
</template>

<script>
import User from "../services/User.services";
export default {
  name: "NavSearch",
  data() {
    return {
      Datalist: [],
      Search: "",
    };
  },
  computed: {
    searchData() {
      return this.Datalist.filter((data) => {
        if (this.Search.length > 1) {
          return (
            data.Name.toLowerCase().indexOf(this.Search.toLowerCase()) != -1,
            data.Description.toLowerCase().indexOf(this.Search.toLowerCase()) !=
              -1
          );
        }
      }).slice(0, 5);
    },
  },
  methods: {
    searChBox() {
      this.Search = "";
    },
  },
  async mounted() {
    this.Datalist = await User.UserMovies()
      .then((res) => res.data.movies)
      .catch((e) => e);
    this.searchData;
  },
};
</script>

<style scoped>
.margin {
  margin-left: 30vw;
}
.form-control {
  transition: transform 400ms;
}
.form-control :focus {
  padding-left: -100px;
}
.card {
  z-index: 3 !important;
}
</style>
