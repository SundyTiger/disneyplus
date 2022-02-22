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
      class="card position-fixed"
      v-if="searchData.length > 0"
      style="width: 18rem"
      aria-labelledby="searchfield"
    >
      <div class="card-body d-flex" v-for="data in searchData" :key="data._id">
        <p class="card-title text-primary">{{ data.Name }}</p>
      </div>
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
            data.Name.toLowerCase().indexOf(this.Search.toLowerCase()) != -1
          );
        }
      }).slice(0, 5);
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
