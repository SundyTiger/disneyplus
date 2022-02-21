<template>
  <div class="card cardclr1 text-white mx-4" v-bind="ImgStatus()">
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
        <div class="mt-5 text-start ms-5 d-flex">
          <div>
            <router-link
              :to="{
                name: 'VideoPlay',
                params: { id: this.id, title: this.title, name: this.title },
              }"
              class="text-decoration-none text-white"
            >
              <div><img src="../assets/playButton.svg" /> Play Button</div>
            </router-link>
          </div>
          <div class="mb-4 ms-5">
            <img
              src="https://res.cloudinary.com/disneyplushotstarclone/image/upload/v1645429462/watchListsvg_tj7dpg.svg"
              v-if="!this.$store.state.imgAdd"
              @click="addToWatchList()"
            />
            <img
              src="https://res.cloudinary.com/disneyplushotstarclone/image/upload/v1645429462/right_hz4wth.svg"
              v-else
              @click="removeFromWatchList()"
            />
            WatchList
          </div>
        </div>
      </div>
      <div>
        <img
          class="column"
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
      mail: "",
    };
  },
  methods: {
    pushRoute() {
      return this.$router.push({
        name: "VideoPlay",
        params: { id: this.id, title: this.title, name: this.title },
      });
    },
    async addToWatchList() {
      await User.addWatchList(this.$store.state.user.Email, this.title)
        .then(async (res) => {
          this.$store.dispatch("setWatchList", res.data.user.WatchList);
        })
        .catch((e) => e);
      this.$store.dispatch("setImgAdd", true);
    },
    async ImgStatus() {
      console.log(this.$store.state.watchlist.includes(this.title));
      if (this.$store.state.watchlist.includes(this.title)) {
        this.$store.dispatch("setImgAdd", true);
      } else {
        this.$store.dispatch("setImgAdd", false);
      }
    },
    async removeFromWatchList() {
      await User.removeWatchList(this.$store.state.user.Email, this.title)
        .then((res) => {
          this.$store.dispatch("setWatchList", res.data.user.WatchList);
        })
        .catch((e) => console.log(e));
      this.$store.dispatch("setImgAdd", false);
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

<style></style>
