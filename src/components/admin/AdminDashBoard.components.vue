<template>
  <div>
    <nav class="navbar navbar-expand-lg text-white mx-5">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link to="/Movies">Movies</router-link>
        <router-view />
        <button type="button" class="btn btn-primary" @click="logOut()">
          LogOut
        </button>
      </ul>
    </nav>
    <form @submit.prevent="addMovie()" enctype="multipart/form-data">
      <div class="mb-3 d-flex justify-content-center">
        <label for="Name" class="text-white form-label me-1">Name:</label>
        <input
          type="text"
          class="form-control-sm"
          id="Name"
          aria-describedby="emailHelp"
          name="Name"
          v-model.lazy="data.Name"
        />
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Lenth" class="text-white form-label me-1">Lenth:</label>
        <input
          type="text"
          class="form-control-sm"
          id="Lenth"
          aria-describedby="emailHelp"
          name="Lenth"
          v-model.lazy="data.Lenth"
        />
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Year" class="text-white form-label me-1">Year:</label>
        <input
          type="number"
          class="form-control-sm"
          id="Year"
          aria-describedby="emailHelp"
          name="Year"
          v-model.lazy.number="data.Year"
        />
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Stream" class="text-white form-label me-1">Stream:</label>
        <select name="Stream" v-model.lazy="data.Stream" id="Stream">
          <option selected>Select Stream</option>
          <option value="Disney Plus">Disney Plus</option>
          <option value="Kids">Kids</option>
          <option value="HotStar">HotStar</option>
          <option value="Sports">Sports</option>
        </select>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Genres" class="text-white form-label me-1">Geners:</label>
        <select name="Genres" v-model.lazy="data.Geners" id="Genres">
          <option selected>Select Genres</option>
          <option value="Comedy">Disney Plus</option>
          <option value="Biopic">Biopic</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Periodic">Periodic</option>
          <option value="Documentary">Documentary</option>
        </select>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Certified" class="text-white form-label me-1"
          >Certified:</label
        >
        <select name="Certified" v-model.lazy="data.Certified" id="Certified">
          <option selected>Select Certified</option>
          <option value="U">U</option>
          <option value="U/A">U/A</option>
          <option value="A">A</option>
        </select>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Language" class="text-white form-label me-1"
          >Language:</label
        >
        <select name="Language" v-model.lazy="data.Language" id="Language">
          <option selected>Select Language</option>
          <option value="Hindi">Hindi</option>
          <option value="Bengali">Bengali</option>
          <option value="Telugu">Telugu</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Tamil">Tamil</option>
          <option value="Marathi">Marathi</option>
          <option value="English">English</option>
          <option value="Kannada">Kannada</option>
        </select>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Images" class="text-white form-label me-1">Image:</label>
        <input
          type="file"
          class="form-control-sm"
          id="Images"
          aria-describedby="emailHelp"
          name="Images"
          @change="submitImage($event)"
        />
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <label for="Description" class="text-white form-label me-1"
          >Description:</label
        >
        <input
          type="text"
          class="form-control-sm"
          id="Description"
          aria-describedby="emailHelp"
          name="Description"
          v-model.lazy="data.Description"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Admin from "../../services/Admin.services";
export default {
  data() {
    return {
      data: {
        Name: "",
        Lenth: "",
        Year: 0,
        Stream: "",
        Geners: "",
        Certified: "",
        Description: "",
        Language: "",
      },
      Images: {},
    };
  },
  methods: {
    logOut() {
      window.user = null;
      this.$router.push({ name: "Home" });
    },
    submitImage(event) {
      console.log(event.target.files);
      this.Images = event.target.files[0];
      console.log(this.Images);
    },
    async addMovie() {
      const formdata = new FormData();
      formdata.append("Images", this.Images);
      formdata.append("data", this.data);
      console.log(formdata);
      const res = await Admin.AddMovies(formdata)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
      console.log(res);
    },
  },
  async created() {},
};
</script>

<style></style>
