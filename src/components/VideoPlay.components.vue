<template>
  <div class="embed-responsive embed-responsive-21by9">
    <video
      width="1350"
      height="400"
      class="embed-responsive-item"
      allowfullscreen
      controls
    >
      <source :src="Data.Video" type="video/mp4" />
      <source :src="Data.Video" type="video/ogg" />
      <source :src="Data.Video" type="video/ogg" />
    </video>
  </div>
</template>

<script>
import User from "../services/User.services";
export default {
  props: ["title"],
  data() {
    return {
      Data: [],
    };
  },
  async created() {
    this.Data = await User.filterMovie({ Title: this.title }).then(
      (res) => res.data.filterData[0]
    );
    console.log(this.Data);
  },
};
</script>

<style></style>
